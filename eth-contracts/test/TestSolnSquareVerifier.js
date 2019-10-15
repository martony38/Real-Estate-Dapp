const should = require("should");
const truffleAssert = require("truffle-assertions");

const SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
const SquareVerifier = artifacts.require("SquareVerifier");

const solutions = [
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
  {
    a: [
      "0x2af927d30d940b2b0b573cc8356629fab16d3c90f8f4d89aef71ade51f8517af",
      "0x28a259cc0fe7e693efa594e8c6a8cbc8bf3a078e7ed65a1b4d1b78967a4a68fa"
    ],
    b: [
      [
        "0x0346c52be0ee2493c40c75d217adbb739269dcef89dbe31f66b3efa5fdcdd672",
        "0x2cda54848fce00a5a6fa1d6c56787db04d8886448e0ad4ace16bbd624ce5b542"
      ],
      [
        "0x04cd36b2d6c31b58a8fcac6f0f6bd49ff9aebdd6aca0b9b014ba0bc2cf9220f8",
        "0x0f74944954a5dacc3fc2067f1ac0ca7faaf3224d3614432555a7a0f58366f3a7"
      ]
    ],
    c: [
      "0x0d2d5e83b4feb642262f6fe3d6211ab3d6636562c049e13404b747f9e7afe5a5",
      "0x30502473e0b1829eabd590c401242182f3a81b48a6a9a370b3dc9053ac407124"
    ],
    input: [4, 1]
  }
];

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

    let mint = await this.contract.mint(account_two, solutions[0], 1);
    truffleAssert.eventEmitted(mint, "SolutionAdded", {
      from: account_two
    });

    const intermediateSupply = await this.contract.totalSupply();
    const intermediateBalance = await this.contract.balanceOf(account_two);
    (intermediateSupply - initialSupply).should.equal(1);
    (intermediateBalance - initialBalance).should.equal(1);

    mint = await this.contract.mint(account_two, solutions[1], 2);
    truffleAssert.eventEmitted(mint, "SolutionAdded", {
      from: account_two
    });

    const finalSupply = await this.contract.totalSupply();
    const finalBalance = await this.contract.balanceOf(account_two);
    (finalSupply - initialSupply).should.equal(2);
    (finalBalance - initialBalance).should.equal(2);
  });

  // Test that a new solution cannot be added if the proof was used previously
  it("cannot add a new solution and mint a new property if the the solution was used previously", async function() {
    const initialSupply = await this.contract.totalSupply();
    const initialBalance = await this.contract.balanceOf(account_two);

    await truffleAssert.fails(
      this.contract.mint(account_two, solutions[0], 1),
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
          ...solutions[0],
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
