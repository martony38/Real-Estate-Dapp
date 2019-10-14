const should = require("should");
const ERC721Mintable = artifacts.require("ERC721Mintable");

contract("TestERC721Mintable", accounts => {
  const account_one = accounts[0];
  const account_two = accounts[1];

  describe("match erc721 spec", function() {
    beforeEach(async function() {
      this.contract = await ERC721Mintable.new({ from: account_one });

      // TODO: mint multiple tokens
      await this.contract.mint(account_one, 1/*, "tokenURI_1"*/);
      await this.contract.mint(account_one, 2/*, "tokenURI_2"*/);
      await this.contract.mint(account_one, 3/*, "tokenURI_3"*/);
      await this.contract.mint(account_two, 4/*, "tokenURI_4"*/);
      await this.contract.mint(account_two, 5/*, "tokenURI_5"*/);
    });

    it("should return total supply", async function() {
      const totalSupply = await this.contract.totalSupply();
      totalSupply.toString().should.equal("5");
    });

    it("should get token balance", async function() {
      let balance = await this.contract.balanceOf(account_one);
      balance.toString().should.equal("3");

      balance = await this.contract.balanceOf(account_two);
      balance.toString().should.equal("2");
    });

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it("should return token uri", async function() {
      const tokenURI = await this.contract.tokenURI(1);
      tokenURI.should.equal(
        "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1"
      );
    });

    it("should transfer token from one owner to another", async function() {
      await this.contract.transferFrom(account_one, account_two, 3);

      let balance = await this.contract.balanceOf(account_one);
      balance.toString().should.equal("2");

      balance = await this.contract.balanceOf(account_two);
      balance.toString().should.equal("3");

      const newOwner = await this.contract.ownerOf(3);
      newOwner.should.equal(account_two);
    });
  });

  describe("have ownership properties", function() {
    beforeEach(async function() {
      this.contract = await ERC721Mintable.new({ from: account_one });
    });

    it("should fail when minting when address is not contract owner", async function() {
      let reason
      try {
        await this.contract.mint(account_one, 1/*, "tokenURI_1"*/, {from: account_two});
      } catch (error) {
        reason = error.reason
      }
      reason.should.equal("Ownable: caller is not the owner")
    });

    it("should return contract owner", async function() {
      const owner = await this.contract.owner()
      owner.should.equal(account_one)
    });
  });
});