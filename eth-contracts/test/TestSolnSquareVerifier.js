const should = require("should");
const truffleAssert = require("truffle-assertions");

const SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
const SquareVerifier = artifacts.require("SquareVerifier");

contract("SolnSquareVerifier", accounts => {
  const account_one = accounts[0];
  const account_two = accounts[1];

  before(async function() {
    this.squareVerifierContract = await SquareVerifier.new({
      from: account_one
    });
    this.contract = await SolnSquareVerifier.new(
      this.squareVerifierContract.address,
      { from: account_one }
    );
  });

  // Test if a new solution can be added for contract - SolnSquareVerifier
  // Test to add a new solution
  // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
  // Test to mint a new property
  it("can add a new solution and mint a new property", async function() {
    const initialSupply = await this.contract.totalSupply();
    const initialBalance = await this.contract.balanceOf(account_two);

    const mint = await this.contract.mint(
      account_two,
      {
        a: [
          "0x1d2fcd072dc40e11aabcaf88b83a17795a91470064e77ee54970da07990c6ff1",
          "0x2e981c691fdd78ea2198482f9baa80ebabac898e5674307493e6ecf244612c3f"
        ],
        b: [
          [
            "0x16ab5f50fd85c7d11b3ddfcaa51d207eac3463598f97eee41aebe827229b28e6",
            "0x1ba66e34e1df7e14b1cf5fb0674352d8ccbbbd0227abd87b4996805da37e4402"
          ],
          [
            "0x065a8bdf81f4f4cabda260ccd3047b4cc58a90ab70e3823c781fb4901a10128b",
            "0x2bfbf82095994dd21dc1d6df2d38db82fdb865ddefaa286d44400d7b1bbb2cf1"
          ]
        ],
        c: [
          "0x2427aecf93aee5f9009c60a97bd01adbffe4dd0d81236f6f7ae616c92d960f21",
          "0x19ff0336d034f99252ff6de4ef21516a3f6b2a1b0ee8f393af6f5e5119b1b86b"
        ],
        input: [9, 1]
      },
      1
    );
    truffleAssert.eventEmitted(mint, "SolutionAdded", {
      from: account_two
    });

    const finalSupply = await this.contract.totalSupply();
    const finalBalance = await this.contract.balanceOf(account_two);
    (finalSupply - initialSupply).should.equal(1);
    (finalBalance - initialBalance).should.equal(1);
  });

  // Test that a new solution cannot be added if the proof was used previously
  it("cannot add a new solution and mint a new property if the the solution was used previously", async function() {
    const initialSupply = await this.contract.totalSupply();
    const initialBalance = await this.contract.balanceOf(account_two);

    await truffleAssert.fails(
      this.contract.mint(
        account_two,
        {
          a: [
            "0x1d2fcd072dc40e11aabcaf88b83a17795a91470064e77ee54970da07990c6ff1",
            "0x2e981c691fdd78ea2198482f9baa80ebabac898e5674307493e6ecf244612c3f"
          ],
          b: [
            [
              "0x16ab5f50fd85c7d11b3ddfcaa51d207eac3463598f97eee41aebe827229b28e6",
              "0x1ba66e34e1df7e14b1cf5fb0674352d8ccbbbd0227abd87b4996805da37e4402"
            ],
            [
              "0x065a8bdf81f4f4cabda260ccd3047b4cc58a90ab70e3823c781fb4901a10128b",
              "0x2bfbf82095994dd21dc1d6df2d38db82fdb865ddefaa286d44400d7b1bbb2cf1"
            ]
          ],
          c: [
            "0x2427aecf93aee5f9009c60a97bd01adbffe4dd0d81236f6f7ae616c92d960f21",
            "0x19ff0336d034f99252ff6de4ef21516a3f6b2a1b0ee8f393af6f5e5119b1b86b"
          ],
          input: [9, 1]
        },
        1
      ),
      truffleAssert.ErrorType.REVERT,
      "Solution is not unique"
    );

    const finalSupply = await this.contract.totalSupply();
    const finalBalance = await this.contract.balanceOf(account_two);
    (finalSupply - initialSupply).should.equal(0);
    (finalBalance - initialBalance).should.equal(0);
  });

  // Test that a new property cant be minted if there was no previous verification
  it("cannot mint a new property if there was no previous verification", async function() {
    const initialSupply = await this.contract.totalSupply();
    const initialBalance = await this.contract.balanceOf(account_two);

    await truffleAssert.fails(
      this.contract.mint(
        account_two,
        {
          a: [
            '0x1d2fcd072dc40e11aabcaf88b83a17795a91470064e77ee54970da07990c6ff1',
            '0x2e981c691fdd78ea2198482f9baa80ebabac898e5674307493e6ecf244612c3f'
          ],
          b: [
            [
              '0x16ab5f50fd85c7d11b3ddfcaa51d207eac3463598f97eee41aebe827229b28e6',
              '0x1ba66e34e1df7e14b1cf5fb0674352d8ccbbbd0227abd87b4996805da37e4402'
            ],
            [
              '0x065a8bdf81f4f4cabda260ccd3047b4cc58a90ab70e3823c781fb4901a10128b',
              '0x2bfbf82095994dd21dc1d6df2d38db82fdb865ddefaa286d44400d7b1bbb2cf1'
            ]
          ],
          c: [
            '0x2427aecf93aee5f9009c60a97bd01adbffe4dd0d81236f6f7ae616c92d960f21',
            '0x19ff0336d034f99252ff6de4ef21516a3f6b2a1b0ee8f393af6f5e5119b1b86b'
          ],
          input: [4, 1]
        },
        1
      ),
      truffleAssert.ErrorType.REVERT,
      "Solution not verified"
    );

    const finalSupply = await this.contract.totalSupply();
    const finalBalance = await this.contract.balanceOf(account_two);
    (finalSupply - initialSupply).should.equal(0);
    (finalBalance - initialBalance).should.equal(0);
  });
});
