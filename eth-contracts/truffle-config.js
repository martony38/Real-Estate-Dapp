const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic =
  "word put entry swing range summer father obtain other idle arrest tortoise";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          "https://rinkeby.infura.io/v3/61fbc724db39446c82986b083d2ed7d4"
        );
      },
      network_id: 4
      //gas: 4500000,
      //gasPrice: 10000000000
    }
  }
};
