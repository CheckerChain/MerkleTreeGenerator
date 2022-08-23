import { MerkleTree } from 'merkletreejs';
const keccak256 = require('keccak256');
const { Address } = require('@elrondnetwork/erdjs');

interface DataInterface {
  wallet: string;
  amount: string;
  index: string;
}
const numberToHex = (el: string) => {
  const h = Number(el).toString(16);
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
  accumulator.forEach((acc) => {
    const proof = tree.getHexProof(acc.hex);
    acc.proof = proof;
    acc.hex = `0x${acc.hex.toString('hex')}`;
  });
  return { root: `0x${merkleRoot}`, data: accumulator };
};
