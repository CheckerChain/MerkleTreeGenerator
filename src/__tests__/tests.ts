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
  root: '0xe75b7491789f69781cbbe92ff80753169b3250ebd2e7fefbd75cebedf96b8fb7',
  data: [
    {
      wallet: 'erd13wsm72uc0c2fwgtpwjn0xlrzfdh7kg59jmrnfcjh9fhqsp7g5yas5sy69l',
      hex: '0x6d9938cc21e1ad5cb14b627e3771d557a2d39baa2c56df0f680115541210e1e8',
      index: '01',
      amount: '1000000',
      proof: [
        '0x69b26dc67a9b125f853867e9577d0691fa0d91786011563acba7cfc489f009fc',
        '0xbfeb305fd5d1d1a18657a86fc3192ce174e2a4b697864b6ec56a46bfefc9d6d3',
      ],
    },
    {
      wallet: 'erd14pgqys8lzhdfnuseev4yh3hfrq2423u8wxkd3fkxsvvpvyannzrs88l2nt',
      hex: '0x71d821aa47cb9279459a38cd0b781cd13fd3105c9b3903b008171511efb639d1',
      index: '02',
      amount: '1000000',
      proof: [
        '0xe84aaa6301dedb01ee5d3b2c09ee0d5a277317755c153e87ad7abfc924cb15fa',
        '0x316ede9dda6676c32db0c540302d3de59bbd55ca7bf4f850f1e2842f20c0af57',
      ],
    },
    {
      wallet: 'erd1xd4amn9w3udwjz9p4myd3rxgtkks807myn5hcsagtd7nw57g3a5q06e743',
      hex: '0xe84aaa6301dedb01ee5d3b2c09ee0d5a277317755c153e87ad7abfc924cb15fa',
      index: '03',
      amount: '1000000',
      proof: [
        '0x71d821aa47cb9279459a38cd0b781cd13fd3105c9b3903b008171511efb639d1',
        '0x316ede9dda6676c32db0c540302d3de59bbd55ca7bf4f850f1e2842f20c0af57',
      ],
    },
    {
      wallet: 'erd162tsmpj0rw8zmfw3yrv6e82qk50ny4e4gtsumqfxf7ddn32t92xqpma2tp',
      hex: '0x69b26dc67a9b125f853867e9577d0691fa0d91786011563acba7cfc489f009fc',
      index: '04',
      amount: '1000000',
      proof: [
        '0x6d9938cc21e1ad5cb14b627e3771d557a2d39baa2c56df0f680115541210e1e8',
        '0xbfeb305fd5d1d1a18657a86fc3192ce174e2a4b697864b6ec56a46bfefc9d6d3',
      ],
    },
  ],
};

test('Merkle Tree Generator', () => {
  expect(generateTree(testData)).toStrictEqual(result);
});
