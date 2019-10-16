const should = require("should");
const truffleAssert = require("truffle-assertions");

const SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
const SquareVerifier = artifacts.require("SquareVerifier");

const solutions = require("../../scripts/solutions");

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
  it("can add new solutions and mint new properties", async function() {
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

    mint = await this.contract.mint(account_two, solutions[2], 3);
    truffleAssert.eventEmitted(mint, "SolutionAdded", {
      from: account_two
    });

    mint = await this.contract.mint(account_two, solutions[3], 4);
    truffleAssert.eventEmitted(mint, "SolutionAdded", {
      from: account_two
    });

    mint = await this.contract.mint(account_two, solutions[4], 5);
    truffleAssert.eventEmitted(mint, "SolutionAdded", {
      from: account_two
    });

    const finalSupply = await this.contract.totalSupply();
    const finalBalance = await this.contract.balanceOf(account_two);
    (finalSupply - initialSupply).should.equal(5);
    (finalBalance - initialBalance).should.equal(5);
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
