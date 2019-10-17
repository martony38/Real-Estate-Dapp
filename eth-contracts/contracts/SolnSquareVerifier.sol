pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2;

import "./ERC721Mintable.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>

contract SquareVerifierInterface {
  function verifyTx(
    uint256[2] memory,
    uint256[2][2] memory,
    uint256[2] memory,
    uint256[2] memory
  ) public returns (bool);
}

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

contract SolnSquareVerifier is ERC721Mintable {
  struct Proof {
    uint256[2] a;
    uint256[2][2] b;
    uint256[2] c;
    uint256[2] input;
  }

  // TODO define a solutions struct that can hold an index & an address
  struct Solution {
    Proof proof;
    uint256 tokenId; // use tokenId as index
    address from;
  }

  SquareVerifierInterface squareVerifier;

  constructor(address verifier) public {
    squareVerifier = SquareVerifierInterface(verifier);
  }

  // TODO define an array of the above struct
  //Solution[] solutions;

  // TODO define a mapping to store unique solutions submitted
  mapping(bytes32 => Solution) private solutions;

  // TODO Create an event to emit when a solution is added
  event SolutionAdded(address from);

  // TODO Create a function to add the solutions to the array and emit the event
  function addSolution(
    uint256 tokenId,
    Proof memory solution,
    address from
  ) private {
    bytes32 solutionKey = keccak256(abi.encodePacked(solution.a, solution.b, solution.c, solution.input));
    require(solutions[solutionKey].from == address(0), "Solution is not unique");
    solutions[solutionKey] = Solution({
      proof: solution,
      tokenId: tokenId,
      from: from
    });
    emit SolutionAdded(from);
  }

  // TODO Create a function to mint new NFT only after the solution has been verified
  //  - make sure the solution is unique (has not been used before)
  //  - make sure you handle metadata as well as tokenSuplly
  function mint(address to, Proof memory solution, uint256 tokenId)
    public
  //string memory tokenURI
  {
    require(
      squareVerifier.verifyTx(
        solution.a,
        solution.b,
        solution.c,
        solution.input
      ),
      "Solution not verified"
    );
    addSolution(tokenId, solution, to);
    super.mint(
      to,
      tokenId /*, tokenURI*/
    );
  }

}
