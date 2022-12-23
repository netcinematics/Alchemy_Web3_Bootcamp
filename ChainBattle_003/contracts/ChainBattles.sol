// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract ChainBattles is ERC721URIStorage  {
    using Strings for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds; 

    mapping(uint256 => uint256) public tokenIdToLevels;
    //Add Struct for more CharacterAttributes.
    struct HeroAbilityClass {
        uint256 idx;
        uint256 aLevel;
        uint256 aSpeed;
        uint256 aStrength;
        uint256 aLife;
    }
    HeroAbilityClass[] private heroAbilitySet;

    function setAbility() public {
        HeroAbilityClass memory heroAbility = HeroAbilityClass(1,2,3,4,5);
        heroAbilitySet.push(heroAbility);
    }

    function getAbility() public view returns (uint256) {
        return heroAbilitySet[0].aLevel;
    }

    constructor() ERC721 ("Chain Battles", "CBTLS"){
    }


    function generateCharacter(uint256 tokenId) public view returns(string memory){

        bytes memory svg = abi.encodePacked(
            '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">',
            '<style>.base { fill: white; font-family: serif; font-size: 14px; }</style>',
            '<rect width="100%" height="100%" fill="black" />',
            '<text x="50%" y="40%" class="base" dominant-baseline="middle" text-anchor="middle">',"Warrior",'</text>',
            '<text x="50%" y="50%" class="base" dominant-baseline="middle" text-anchor="middle">', "Levels: ",getLevels(tokenId),'</text>',
            '</svg>'
        );
        return string(
            abi.encodePacked(
                "data:image/svg+xml;base64,",
                Base64.encode(svg)
            )    
        );
    }

    function getLevels(uint256 tokenId) public view returns (string memory) {
        uint256 levels = tokenIdToLevels[tokenId];
        return levels.toString();
    }

    function train(uint256 tokenId) public {
        require(_exists(tokenId), "Please use an existing token");
        require(ownerOf(tokenId) == msg.sender, "You must own this token to train it");
        uint256 currentLevel = tokenIdToLevels[tokenId];
        tokenIdToLevels[tokenId] = currentLevel + 1;
        _setTokenURI(tokenId, getTokenURI(tokenId));
    }

    function getTokenURI(uint256 tokenId) public view returns (string memory){
        bytes memory dataURI = abi.encodePacked(
            '{',
                '"name": "Chain Battles #', tokenId.toString(), '",',
                '"description": "Battles on chain",',
                '"image": "', generateCharacter(tokenId), '"',
            '}'
        );
        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(dataURI)
            )
        );
    }

    function mint() public {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);
        tokenIdToLevels[newItemId] = 0;

        setRandomAttributes(newItemId); //CHALLENGE SOLUTION.

        _setTokenURI(newItemId, getTokenURI(newItemId));
    }

    function setRandomAttributes(uint256 itemId) private {
        require(itemId>0,"bad parameter");
        // require(heroAbilitySet[itemId]!= HeroAbilityClass,"bad lookup");

        uint256 rand1 = unsafeRandomNUM(1);
        uint256 rand2 = unsafeRandomNUM(2);
        uint256 rand3 = unsafeRandomNUM(3);
        uint256 rand4 = unsafeRandomNUM(4);

        HeroAbilityClass memory heroAbility = HeroAbilityClass(itemId,rand1,rand2,rand3,rand4);
        heroAbilitySet.push(heroAbility);

    }

    function unsafeRandomNUM(uint number) public view returns(uint){
        return uint(blockhash(block.number-1)) % number; //RANDOM-BLOCK-HASH
    }



//     function random(uint number) public view returns(uint){ //RANDOM-BLOCK-DIFFICULTY
//         return uint(keccak256(abi.encodePacked(block.timestamp,block.difficulty,  
//         msg.sender))) % number;
//     }

// contract RandomNumbers{ //INCREMENTING RANDOM NUM.
//     uint initialNumber;
//     function createRandom(uint number) public returns(uint){
//         return uint(keccak256(abi.encodePacked(initialNumber++))) % number;
//     }
// }

// contract RandomNumberarray{
//     function random(uint[] memory _myArray) public view returns(uint[] memory){
//         uint a = _myArray.length; 
//         uint b = _myArray.length;
//         for(uint i = 0; i< b ; i++){
//             uint randNumber =(uint(keccak256      
//             (abi.encodePacked(block.timestamp,_myArray[i]))) % a)+1;
//             uint interim = _myArray[randNumber - 1];
//             _myArray[randNumber-1]= _myArray[a-1];
//             _myArray[a-1] = interim;
//             a = a-1;
//         }
//         uint256[] memory result;
//         result = _myArray;       
//         return result;        
//     }
// }   

}