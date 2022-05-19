import { generateTree } from '../index';
const testData = [
  {
    index: '01',
    wallet: 'erd13wsm72uc0c2fwgtpwjn0xlrzfdh7kg59jmrnfcjh9fhqsp7g5yas5sy69l',
    amount: '1000000',
  },
  {
    index: '02',
    wallet: 'erd14pgqys8lzhdfnuseev4yh3hfrq2423u8wxkd3fkxsvvpvyannzrs88l2nt',
    amount: '1000000',
  },
  {
    index: '03',
    wallet: 'erd1xd4amn9w3udwjz9p4myd3rxgtkks807myn5hcsagtd7nw57g3a5q06e743',
    amount: '1000000',
  },
  {
    index: '04',
    wallet: 'erd162tsmpj0rw8zmfw3yrv6e82qk50ny4e4gtsumqfxf7ddn32t92xqpma2tp',
    amount: '1000000',
  },
];

const result = {
  data: [
    {
      index: '01',
      wallet: 'erd13wsm72uc0c2fwgtpwjn0xlrzfdh7kg59jmrnfcjh9fhqsp7g5yas5sy69l',
      amount: '1000000',
      hex: '0xcf5b09abab859190378da6801b5af134fcf6ce275348a7d34074d308c70c70b0',
      proof: [
        '0xfdecaa4d8d58e76af23ffa5b9f2c35fbcfaa8af09371b2bbcea143367a5aaf44',
        '0x21b1202c9bb204384147e336fc193578f08e49012ad1cdd90465ec6f539bad06',
      ],
    },
    {
      index: '02',
      wallet: 'erd14pgqys8lzhdfnuseev4yh3hfrq2423u8wxkd3fkxsvvpvyannzrs88l2nt',
      amount: '1000000',
      hex: '0x73910e8412743e95b5d5cb5092a8e96cb030b81ac53321b2f3585c06b03fc01e',
      proof: [
        '0x7b5c64c4b91caaaef166d9940b78678b05247f25a548a65297ae342fa92bbc49',
        '0xd58db09f703c9f26b2de008c7821dd2a0e52548f318a0bcafc8d8ebec0fdeaf5',
      ],
    },
    {
      index: '03',
      wallet: 'erd1xd4amn9w3udwjz9p4myd3rxgtkks807myn5hcsagtd7nw57g3a5q06e743',
      amount: '1000000',
      hex: '0xfdecaa4d8d58e76af23ffa5b9f2c35fbcfaa8af09371b2bbcea143367a5aaf44',
      proof: [
        '0xcf5b09abab859190378da6801b5af134fcf6ce275348a7d34074d308c70c70b0',
        '0x21b1202c9bb204384147e336fc193578f08e49012ad1cdd90465ec6f539bad06',
      ],
    },
    {
      index: '04',
      wallet: 'erd162tsmpj0rw8zmfw3yrv6e82qk50ny4e4gtsumqfxf7ddn32t92xqpma2tp',
      amount: '1000000',
      hex: '0x7b5c64c4b91caaaef166d9940b78678b05247f25a548a65297ae342fa92bbc49',
      proof: [
        '0x73910e8412743e95b5d5cb5092a8e96cb030b81ac53321b2f3585c06b03fc01e',
        '0xd58db09f703c9f26b2de008c7821dd2a0e52548f318a0bcafc8d8ebec0fdeaf5',
      ],
    },
  ],
  root: '0x6706f2e66ff1c09057cec70d8f14cf37c92ac453396858defd7857c455858a39',
};

test('Merkle Tree Generator', () => {
  expect(generateTree(testData)).toStrictEqual(result);
});
