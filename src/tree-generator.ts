import { MerkleTree } from 'merkletreejs';
const keccak256 = require('keccak256');
const { Address } = require('@elrondnetwork/erdjs');

interface DataInterface {
  wallet: string;
  amount: string;
  index: string;
}
const numberToHex = (el: String) => {
  let h = Number(el).toString(16);
  return h.length % 2 === 0 ? h : `0${h}`;
};
const getHashedData = (el: any) => {
  const buf = Buffer.concat([
    Buffer.from(numberToHex(el.index), 'hex'),
    Buffer.from(new Address(el.wallet).valueHex, 'hex'),
    Buffer.from(numberToHex(el.amount), 'hex'),
  ]);
  return Buffer.from(keccak256(buf), 'hex');
};

export const generateTree = (data: DataInterface[]) => {
  const leavesData: Buffer[] = [];
  const accumulator: any[] = [];
  data.forEach((d) => {
    const hashedData = getHashedData(d);
    leavesData.push(hashedData);
    accumulator.push({
      wallet: d.wallet,
      hex: hashedData,
      index: d.index,
      amount: d.amount,
    });
  });
  const tree = new MerkleTree(leavesData, keccak256, {
    sort: true,
  });
  const merkleRoot = tree.getRoot().toString('hex');
  accumulator.forEach((data) => {
    const proof = tree.getHexProof(data.hex);
    data.proof = proof;
    data.hex = `0x${data.hex.toString('hex')}`;
  });
  return { root: `0x${merkleRoot}`, data: accumulator };
};
