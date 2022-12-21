NOTES - how to create and run this project...

mkdir BuyMeACoffee-contracts
cd BuyMeACoffee-contracts

>npm init -y  //package.json

>npm install --save-dev hardhat

>npx hardhat

> CREATE JAVASCRIPT PROJECT (very important)
- adds .gitignore
- adds README
- adds /contracts/scripts/test/ with EXAMPLES.
- adds hardhat.config

> AND ALSO SAMPLE PROJECTS (very important)
✔ Do you want to install this sample project's dependencies with npm (@nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers)? (Y/n) Y

> npx hardhat test

npm install --save-dev "hardhat@^2.11.1" "@nomicfoundation/hardhat-toolbox@^2.0.0" "@nomicfoundation/hardhat-network-helpers@^1.0.0" "@nomicfoundation/hardhat-chai-matchers@^1.0.0" 
"@nomiclabs/hardhat-ethers@^2.0.0" "@nomiclabs/hardhat-etherscan@^3.0.0" "chai@^4.2.0" "ethers@^5.4.7" "hardhat-gas-reporter@^1.0.8" "solidity-coverage@^0.8.0" "@typechain/hardhat@^6.1.2" "typechain@^8.1.0" "@typechain/ethers-v5@^10.1.0" "@ethersproject/abi@^5.4.7" "@ethersproject/providers@^5.4.7"

HARDHAT DEPENDENCIES BROKEN!
Had to delete version in Hardhat install prompt to get it to install  @ethersproject/providers

>npx hardhat run scripts/buy-coffee.js

>npx hardhat run scripts/deploy.js

deployed metamask: 0x5FbDB2315678afecb367f032d93F642f64180aa3

> npx hardhat run scripts/deploy.js --network goerli

deployed alchemy(?) on goerli: 0x79A73750669f796D915d29f0689eE30d1C6e5c1D

> npm install dotenv

create env

> npx hardhat run scripts/withdraw.js

- DEPLOY to Metamask and Alchemy (goerli)


# REPLIT FRONTEND

- set contract address

- confirm ABI







//--------------------------------------
Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
