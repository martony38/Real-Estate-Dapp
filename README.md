# Real Estate Dapp

This project is a decentralized house listing service that creates ERC721 tokens representing real estate properties after verification using the zk-SNARKs toolbox from [ZoKrates](https://github.com/Zokrates/ZoKrates). The tokens can be exchanged on the blockchain market place [OpenSea](https://docs.opensea.io/).

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Truffle](https://www.trufflesuite.com/docs/truffle/getting-started/installation)
- [Ganache CLI](https://github.com/trufflesuite/ganache-cli/blob/master/README.md)

## Installation

- `git clone` this repository
- `npm install`

## Tests

- `truffle test` to run the tests suite

## Deploy Contracts

- `truffle compile --all` to compile contracts
- `truffle migrate --reset --network rinkeby` to deploy to rinkeby network

## Mint tokens

- `npm run mint` to mint 10 tokens

## OpenSea Marketplace

- Navigate to `https://rinkeby.opensea.io/assets/<asset_contract_address>/<token_id>` to sell and buy the tokens

## Deploy Log
```
Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x6ab58f


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xf9ea4068f27b09547c73a449a3cb7b16e22c891e98968a3e71759ef1ce8e5e66
   > Blocks: 1            Seconds: 16
   > contract address:    0x54FC3eE7b9FBE0e0C2280e5cEfb57e330da25420
   > block number:        5269911
   > block timestamp:     1571187754
   > account:             0xF61728bB526AcA8fe211982dAA0F22b97B0B964A
   > balance:             2.16548916309999956
   > gas used:            261393
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00522786 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00522786 ETH


2_deploy_contracts.js
=====================

   Deploying 'SquareVerifier'
   --------------------------
   > transaction hash:    0x551f3ec664e111035c18d13faaa85279062a7f1313dc39a86f6c6c2b45279f98
   > Blocks: 0            Seconds: 12
   > contract address:    0x663Fb516D37896d449e76Fd7B96761924D433A56
   > block number:        5269913
   > block timestamp:     1571187784
   > account:             0xF61728bB526AcA8fe211982dAA0F22b97B0B964A
   > balance:             2.14037712309999956
   > gas used:            1213579
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02427158 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x261208206310b7d2206f304e648c8de777b5699125eb760a0d6d5f55a5ec9e50
   > Blocks: 0            Seconds: 12
   > contract address:    0xBa1121Bc120eF6690198992E8b8F65D30d06E2a1
   > block number:        5269914
   > block timestamp:     1571187799
   > account:             0xF61728bB526AcA8fe211982dAA0F22b97B0B964A
   > balance:             2.04972134309999956
   > gas used:            4532789
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.09065578 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.11492736 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.12015522 ETH
```

## OpenSea Marketplace Transactions

- [0x66b3caca469d2db6d35a073f9d1923d829bec3bdb3ca82a4de9773defae74f14](https://rinkeby.etherscan.io/tx/0x66b3caca469d2db6d35a073f9d1923d829bec3bdb3ca82a4de9773defae74f14)
- [0x64a5850c82dcbd1cf1a7b9ac4d4bcf98371601352eb3c08fc43689ac99be82ba](https://rinkeby.etherscan.io/tx/0x64a5850c82dcbd1cf1a7b9ac4d4bcf98371601352eb3c08fc43689ac99be82ba)
- [0x3ee40ca7a67b471688166668611b205eb7a03c111513c42882b58198d00e14fe](https://rinkeby.etherscan.io/tx/0x3ee40ca7a67b471688166668611b205eb7a03c111513c42882b58198d00e14fe)
- [0x2ec9fb6639b5b851878aea362f8c0eeda1391ff1e2a0599e88a539bad1028c94](https://rinkeby.etherscan.io/tx/0x2ec9fb6639b5b851878aea362f8c0eeda1391ff1e2a0599e88a539bad1028c94)
- [0x1e0f118a07f4d41be06c3b19f64b6d4a5a590883853505b0fbf09e1ad135fbf4](https://rinkeby.etherscan.io/tx/0x1e0f118a07f4d41be06c3b19f64b6d4a5a590883853505b0fbf09e1ad135fbf4)


## Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)