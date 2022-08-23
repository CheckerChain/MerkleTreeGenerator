# Merkle Tree Generator for Elrond

A Simple Javascript library to generate Merkle Tree and get its root and proof for any type of Merkle Tree Distribution

## Installation

The recommend way to use Merkle Tree Generator is to install it as a dependency:

```shell
# If you use npm:
npm i @checkerchain/elrond-merkle-tree-generator

# Or if you use Yarn:
yarn add @checkerchain/elrond-merkle-tree-generator
```

## Example

1. The first step is to import the function generateTree from the package.

```javascript
import { generateTree } from '@checkerchain/elrond-merkle-tree-generator';
```
or

```javascript
const { generateTree } = require('@checkerchain/elrond-merkle-tree-generator');
```

2. The next step is to send a array of data to the generate tree function. The format of data should be:

   ```
   data = [
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
      ....
   ]

   const result = generateTree(data);
   console.log(result);
   ```

3. And boom, you are done! It returns you with the merkle root and proof for all the passed wallets, which can be passed on Smart Contracts for claiming the rewards.

This is just the initial version of the package, feel free to contribute more to it.
