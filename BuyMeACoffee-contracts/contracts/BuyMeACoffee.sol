//SPDX-License-Identifier: MIT

// contracts/BuyMeACoffee.sol
pragma solidity ^0.8.17;

// Switch this to your own contract address once deployed, for bookkeeping!
// Example Contract Address on Goerli: 0xDBa03676a2fBb6711CB652beF5B7416A53c1421D

// ALCHEMY UNIVERSITY HOMEWORK - completed below.
// Allow your smart contract to update the withdrawal address.
// > function updateWithdrawProcess() below.
// Allow your smart contract to buyLargeCoffee for 0.003 ETH, 
// > function buyLargeCoffee()  below.
// and create a button on the frontend website that shows a "Buy Large Coffee for 0.003ETH" button.
// https://replit.com/@spazefalcon/BuyMeACoffee-Solidity-DeFi-Tipping-app#pages/index.jsx
// ReDeployed: UPDATED ABI...
// REPLIT WALLET CONNECT DOC: https://blog.replit.com/solidity

contract BuyMeACoffee {
    // Event to emit when a Memo is created.
    event NewMemo(
        address indexed from,
        uint256 timestamp,
        string name,
        string message
    );
    
    // Memo struct.
    struct Memo {
        address from;
        uint256 timestamp;
        string name;
        string message;
    }
    
    // Address of contract deployer. Marked payable so that
    // we can withdraw to this address later.
    address payable owner;

    // List of all memos received from coffee purchases.
    Memo[] memos;

    constructor() {
        // Store the address of the deployer as a payable address.
        // When we withdraw funds, we'll withdraw here.
        owner = payable(msg.sender);
    }

    /**
     * @dev fetches all stored memos
     */
    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }

    /**
     * @dev buy a coffee for owner (sends an ETH tip and leaves a memo)
     * @param _name name of the coffee purchaser
     * @param _message a nice message from the purchaser
     */
    function buyCoffee(string memory _name, string memory _message) public payable {
        // Must accept more than 0 ETH for a coffee.
        require(msg.value > 0, "can't buy coffee for free!");

        // Add the memo to storage!
        memos.push(Memo(
            msg.sender,
            block.timestamp,
            _name,
            _message
        ));

        // Emit a NewMemo event with details about the memo.
        emit NewMemo(
            msg.sender,
            block.timestamp,
            _name,
            _message
        );
    }

    /**
     * @dev send the entire balance stored in this contract to the owner
     */
    function withdrawTips() public {
        require(owner.send(address(this).balance));
    }

    /// @dev updateWithdrawAddress - allow owner to change the withdraw address.
    function updateWithdrawAddress() public {
        require(msg.sender==owner, "Only owner");
        owner = payable(msg.sender);
    }
    //TODO: UNITTEST this ...
    //https://replit.com/@spazefalcon/BuyMeACoffee-Solidity-DeFi-Tipping-app#pages/index.jsx
    /// @dev buyLargeCoffee - allow user to buy large coffee for 0.003ETH - from front end replit
    // function buyCoffee(string memory _name, string memory _message) public payable {
    function buyLargeCoffee(string memory _name, string memory _message) public payable {
        require(msg.sender != owner, "Only non owner");
        // Must accept more than 0 ETH for a coffee.
        require(msg.value > 0, "can't buy large coffee for free!");

        // Add the memo to storage!
        memos.push(Memo(
            msg.sender,
            block.timestamp,
            _name,
            _message
        ));

        // Emit a NewMemo event with details about the memo.
        emit NewMemo(
            msg.sender,
            block.timestamp,
            _name,
            _message
        );
    }

}

// Uncomment this line to use console.log
// import "hardhat/console.sol";

// contract Lock {
//     uint public unlockTime;
//     address payable public owner;

//     event Withdrawal(uint amount, uint when);

//     constructor(uint _unlockTime) payable {
//         require(
//             block.timestamp < _unlockTime,
//             "Unlock time should be in the future"
//         );

//         unlockTime = _unlockTime;
//         owner = payable(msg.sender);
//     }

//     function withdraw() public {
//         // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
//         // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

//         require(block.timestamp >= unlockTime, "You can't withdraw yet");
//         require(msg.sender == owner, "You aren't the owner");

//         emit Withdrawal(address(this).balance, block.timestamp);

//         owner.transfer(address(this).balance);
//     }
// }
