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

## Project Review

### Contract ABI

- After compiling the contracts with `truffle compile --all`, the contract ABI can be found in `eth-contracts/build/contracts/SolnSquareVerifier.json`

### Contracts Addresses

SolnSquareVerifier : 0x3Ae1B514A4e0aEb051569a147aDc824466A96deB
SquareVerifier : 0xa4a4d2a47D726d680BD95659b3527815028654Bb

### OpenSea Storefront Links

[StoreFront](https://rinkeby.opensea.io/assets/higiezinak)


#### Individual token links

- [Higiezinak #0](https://rinkeby.opensea.io/assets/0x3Ae1B514A4e0aEb051569a147aDc824466A96deB/0)
- [Higiezinak #1](https://rinkeby.opensea.io/assets/0x3Ae1B514A4e0aEb051569a147aDc824466A96deB/1)
- [Higiezinak #2](https://rinkeby.opensea.io/assets/0x3Ae1B514A4e0aEb051569a147aDc824466A96deB/2)
- [Higiezinak #3](https://rinkeby.opensea.io/assets/0x3Ae1B514A4e0aEb051569a147aDc824466A96deB/3)
- [Higiezinak #4](https://rinkeby.opensea.io/assets/0x3Ae1B514A4e0aEb051569a147aDc824466A96deB/4)
- [Higiezinak #5](https://rinkeby.opensea.io/assets/0x3Ae1B514A4e0aEb051569a147aDc824466A96deB/5)
- [Higiezinak #6](https://rinkeby.opensea.io/assets/0x3Ae1B514A4e0aEb051569a147aDc824466A96deB/6)
- [Higiezinak #7](https://rinkeby.opensea.io/assets/0x3Ae1B514A4e0aEb051569a147aDc824466A96deB/7)
- [Higiezinak #8](https://rinkeby.opensea.io/assets/0x3Ae1B514A4e0aEb051569a147aDc824466A96deB/8)
- [Higiezinak #9](https://rinkeby.opensea.io/assets/0x3Ae1B514A4e0aEb051569a147aDc824466A96deB/9)

### OpenSea Marketplace Transactions

- [0x83f744e83e39ba5cf5a44b7f3a5b22b1e43358d05cce40e042c192564f6dd62b](https://rinkeby.etherscan.io/tx/0x83f744e83e39ba5cf5a44b7f3a5b22b1e43358d05cce40e042c192564f6dd62b)
- [0x944d9cdc636438ee0e94e0b1ff365ee3f1c54b4cda28c681c84caf2a8d4b8078](https://rinkeby.etherscan.io/tx/0x944d9cdc636438ee0e94e0b1ff365ee3f1c54b4cda28c681c84caf2a8d4b8078)
- [0x2308bed5ccb34a7b825f011e1202462bbdd6018a7b57435afa91eac6c8ff17d0](https://rinkeby.etherscan.io/tx/0x2308bed5ccb34a7b825f011e1202462bbdd6018a7b57435afa91eac6c8ff17d0)
- [0x01d3a7bc21d13f317c5adaa61e049845a5d7096ea5068301b8eb5887f5885556](https://rinkeby.etherscan.io/tx/0x01d3a7bc21d13f317c5adaa61e049845a5d7096ea5068301b8eb5887f5885556)
- [0x7068799c33ce119e256c852998f3a7e1ac02378384e9ccbedaf20f71457a438c](https://rinkeby.etherscan.io/tx/0x7068799c33ce119e256c852998f3a7e1ac02378384e9ccbedaf20f71457a438c)
- [0xdef81c6659f6e5a56c289362124581cfbea7c718061cf19b5bf65da66098276f](https://rinkeby.etherscan.io/tx/0xdef81c6659f6e5a56c289362124581cfbea7c718061cf19b5bf65da66098276f)

### Deploy Log

```
Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x6aba03


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x8659eee5a4ff0829d902170a05a3ed8ea16faa6cc4ba83f8d05dd753aff94daf
   > Blocks: 0            Seconds: 8
   > contract address:    0x11201feEB01C0213Bc6C921F4cc326cC516f6306
   > block number:        5280697
   > block timestamp:     1571349549
   > account:             0xF61728bB526AcA8fe211982dAA0F22b97B0B964A
   > balance:             4.90595649409999956
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
   > transaction hash:    0xc339ca506cbf04d5a7ca925c92d8a427f607aff263221c91f325f9a3e68d01fa
   > Blocks: 0            Seconds: 12
   > contract address:    0xa4a4d2a47D726d680BD95659b3527815028654Bb
   > block number:        5280699
   > block timestamp:     1571349579
   > account:             0xF61728bB526AcA8fe211982dAA0F22b97B0B964A
   > balance:             4.88084445409999956
   > gas used:            1213579
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02427158 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x99a4a719b3f2be64b2b3b1488393a2b39d4262acf93873eb0ba070cf16c239ec
   > Blocks: 0            Seconds: 8
   > contract address:    0x3Ae1B514A4e0aEb051569a147aDc824466A96deB
   > block number:        5280700
   > block timestamp:     1571349594
   > account:             0xF61728bB526AcA8fe211982dAA0F22b97B0B964A
   > balance:             4.78979251409999956
   > gas used:            4552597
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.09105194 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.11532352 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.12055138 ETH
```

## Project Resources

- [Remix - Solidity IDE](https://remix.ethereum.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Truffle Framework](https://truffleframework.com/)
- [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
- [Open Zeppelin ](https://openzeppelin.org/)
- [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
- [Docker](https://docs.docker.com/install/)
- [ZoKrates](https://github.com/Zokrates/ZoKrates)
