# CHAIN-BATTLE!

mkdir ChainBattle
cd ChainBattle

//RUN FROM COMMAND LINE NOT VS CODE - because of the hardhat "install your own dependencies msg"
//fails to install dependencies from VSCODE!?!

>npm init -y  //package.json

>npm install --save-dev hardhat

//creates node-modules and package.lock (commit package.lock)

>npx hardhat

> CREATE JAVASCRIPT PROJECT (very important)
- adds .gitignore
- adds README
- adds folders /contracts/scripts/test/ with EXAMPLES.
- adds hardhat.config

//RUN THESE from CMD not VSCODE. COPY AND PASTE works in CMD not VSCODE (success)
You need to install these dependencies to run the sample project:
  npm install --save-dev "hardhat@^2.11.1" "@nomicfoundation/hardhat-toolbox@^2.0.0" "@nomicfoundation/hardhat-network-helpers@^1.0.0" "@nomicfoundation/hardhat-chai-matchers@^1.0.0" "@nomiclabs/hardhat-ethers@^2.0.0" "@nomiclabs/hardhat-etherscan@^3.0.0" "chai@^4.2.0" "ethers@^5.4.7" "hardhat-gas-reporter@^1.0.8" "solidity-coverage@^0.8.0" "@typechain/hardhat@^6.1.2" "typechain@^8.1.0" "@typechain/ethers-v5@^10.1.0" "@ethersproject/abi@^5.4.7" "@ethersproject/providers@^5.4.7"

> AND ALSO SAMPLE PROJECTS (very important)
✔ Do you want to install this sample project's dependencies with npm (@nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers)? (Y/n) Y



npm install --save-dev "hardhat@^2.11.1" "@nomicfoundation/hardhat-toolbox@^2.0.0" 
npm install --save-dev "@nomicfoundation/hardhat-network-helpers@^1.0.0" "@nomicfoundation/hardhat-chai-matchers@^1.0.0"
npm install --save-dev "@nomiclabs/hardhat-ethers@^2.0.0" "@nomiclabs/hardhat-etherscan@^3.0.0" "chai@^4.2.0" 
npm install --save-dev "ers-v5@^10.1.0" "@ethersproject/abi@^5.4.7" "@ethersproject/providers@^5.4.7"

npm install --save-dev "hardhat@^2.11.1" "@nomicfoundation/hardhat-toolbox@^2.0.0" "@nomicfoundation/hardhat-network-helpers@^1.0.0" 
"@nomicfoundation/hardhat-chai-matchers@^1.0.0" "@nomiclabs/hardhat-ethers@^2.0.0" "@nomiclabs/hardhat-etherscan@^3.0.0" "chai@^4.2.0" 
"ethers@^5.4.7" "hardhat-gas-reporter@^1.0.8" "solidity-coverage@^0.8.0" "@typechain/hardhat@^6.1.2" "typechain@^8.1.0" "@typechain/ethers-v5@^10.1.0" "@ethersproject/abi@^5.4.7" "@ethersproject/providers@^5.4.7"

> npx hardhat test  //all tests PASS in VSCODE ... not CMD!

> npm install --save @openzeppelin/contracts

> npm install --save @nomiclabs/hardhat-waffle

CTRL + F5 - compile all hotkey //didnt work DO NOT INSTALL SOLIDITY DEBUGGER (Meadow)

> npx hardhat compile  //compile all

> npx hardhat run scripts/deploy.js --network mumbai


# Connect to Mumbai in hardhat.config.js
module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: process.env.TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
};

> npx hardhat verify --network mumbai 0x9A9A1D...


# POLYGONSCAN > Contract > Write Contract > Connect Wallet > Mint > Write

[ethjs-query] while formatting outputs from RPC '{"value":{"code":-32603,"data":{"code":-32000,"message":"transaction underpriced"}}}'

SOLUTION: it worked the next day after ... being more patient. : )



https://testnets.opensea.io/collection/chain-battles-1zlzgrjvn0
https://testnets.opensea.io/assets/mumbai/0x9a9.../1

> Level 1 - from 0 to 1.

# CHALLENGE - add attributes

X - Change tokenIdToLevels[] mapping to struct :
X - Level
X - Speed
X - Strength
X - Life

X - randomize the values.

//With changes.
> npx hardhat run scripts/deploy.js --network mumbai
0xE144..
> npx hardhat verify --network mumbai 0xE144..
Successfully verified contract ChainBattles on Etherscan.
https://mumbai.polygonscan.com/address/0xE144#code

## ----
This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
