// Inspired from https://github.com/ProjectOpenSea/opensea-creatures/blob/master/scripts/mint.js
const HDWalletProvider = require("@truffle/hdwallet-provider");
const web3 = require("web3");
const {
  abi: NFT_ABI
} = require("../eth-contracts/build/contracts/SolnSquareVerifier.json");
const solutions = require("./solutions");
const MNEMONIC =
  "word put entry swing range summer father obtain other idle arrest tortoise";
const NFT_CONTRACT_ADDRESS = "0xBa1121Bc120eF6690198992E8b8F65D30d06E2a1";
const OWNER_ADDRESS = "0xF61728bB526AcA8fe211982dAA0F22b97B0B964A";
const NUM_TOKENS = 10;

async function sendTx(method, params, opts) {
  // Estimate gas cost of transaction then set the gas limit to 1.1 that
  // amount.
  const estimatedGas = await method(...params).estimateGas(opts);
  return await method(...params).send({ ...opts, gas: estimatedGas });
}

async function main() {
  const provider = new HDWalletProvider(
    MNEMONIC,
    "https://rinkeby.infura.io/v3/61fbc724db39446c82986b083d2ed7d4"
  );
  const web3Instance = new web3(provider);
  const nftContract = new web3Instance.eth.Contract(
    NFT_ABI,
    NFT_CONTRACT_ADDRESS
  );

  // Creatures issued directly to the owner.
  for (var i = 0; i < NUM_TOKENS; i++) {
    try {
      const result = await sendTx(
        nftContract.methods.mint,
        [OWNER_ADDRESS, solutions[i], i],
        {
          from: OWNER_ADDRESS
        }
      );
      console.log("Minted token. Transaction: " + result.transactionHash);
    } catch (error) {
      console.log(error);
    }
  }

  process.exit();
}

main();
