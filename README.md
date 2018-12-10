# Consensus Cookbook

A decentralized application for your Cookbook Recipes 🍽🍳 

## Description 
Consensus Cookbook aims to provide a platform to share and find recipes made by others and vote for them. Consensus Cookbook provides a unique social and quality environment for people to search for Cookbooks, try recipes posted by others and vote for them.

Users give up tokens to vote for the cookbook that they want to try and in return, they are provided with details of recipes in those cookbooks. The face of Consensus Cookbook is the client-side application where users can search for cookbooks and vote. Using the Ethereum blockchain and front-end client-side application the Platform and its community participants are decentralized, allowing for the creation of a platform for sharing cookbooks which could be trusted.

## Deployment
To Deploye the application, there are a couple of things you need to make sure before we can get you going: 

#### Ganache 
You'll first want to make sure that you have Ganache from the Truffle Suite installed on your computer. It allows you to quickly fire up a personal Ethereum blockchain which you can use to run tests, execute commands, and inspect state while controlling how the chain operates.

Once opened, be sure to take a note of what the RPC Server is (found at the top navigation bar). The RPC Server should default to `HTTP://127.0.0.1:7545`, but if it's not just be sure that you have the RPC server saved for the next step.

#### MetaMask 
MetaMask is a bridge that allows you to visit the distributed web of tomorrow in your browser today. It allows you to run Ethereum dApps right in your browser without running a full Ethereum node.

To ensure that the entire Blockchain transactions can occur, you'll want to make sure that you have MetaMask completely downloaded on your web browser which can be found [here](https://metamask.io).

Once installed, be sure to add a custom RPC Server which will the same one listed as Ganache. The reason we want to do this is so we can keep track of our current deployment environment through Ganache's UI and import any private keys from Ganache.

#### Project Directory 
Now you'll want to download the project folder and be sure everything is running as it should. I would first recommend that you run a `truffle migrate --reset -all` to migrate the contract information over.

Next you'll want to do a `cd` into `client/` and then run an `npm install` just to make sure all of your dependencies are up to date for the project. 

Be sure that Ganache and Metamask are loaded, and within `client/` run an `npm start` which should open up a new webpage on `localhost:3000` and then you can be able to test the project. 







