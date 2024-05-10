const hre = require("hardhat");
const { ethers } = require("ethers");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether');
};

async function main() {
  console.log(`Preparing deployment...\n`);

  const Token = await hre.ethers.getContractFactory("Token");
  const Exchange = await hre.ethers.getContractFactory("Exchange");
  const TransactionRating = await hre.ethers.getContractFactory("TransactionRating");
  const Dappcord = await hre.ethers.getContractFactory("Dappcord");
  
  const SocialExchange = await hre.ethers.getContractFactory("SocialExchange");
  const socialExchange = await SocialExchange.deploy();
  await socialExchange.deployed();
  console.log(`SocialExchange contract deployed to: ${socialExchange.address}`);

  const accounts = await hre.ethers.getSigners();

  console.log(`Accounts fetched:\n${accounts[0].address}\n${accounts[1].address}\n`);

  const transactionRating = await TransactionRating.deploy();
  await transactionRating.deployed();
  console.log(`TransactionRating contract deployed to: ${transactionRating.address}`);

  const stx = await Token.deploy("Soshal Exchange", "STX", "1000000");
  await stx.deployed();
  console.log(`STX Deployed to: ${stx.address}`);

  const mETH = await Token.deploy("mETH", "mETH", "1000000");
  await mETH.deployed();
  console.log(`mETH Deployed to: ${mETH.address}`);

  const mDAI = await Token.deploy("mDAI", "mDAI", "1000000");
  await mDAI.deployed();
  console.log(`mDAI Deployed to: ${mDAI.address}`);

  const exchange = await Exchange.deploy(accounts[1].address, 10);
  await exchange.deployed();
  console.log(`Exchange Deployed to: ${exchange.address}`);

  const NAME = "Dappcord";
  const SYMBOL = "DC";
  const dappcord = await Dappcord.deploy(NAME, SYMBOL);
  await dappcord.deployed();
  console.log(`Deployed Dappcord Contract at: ${dappcord.address}`);

  const CHANNEL_NAMES = ["Antonio's Hub", "Neel's Hub", "Ryan's Hub"];
  const COSTS = [tokens(0), tokens(0), tokens(0)];

  for (var i = 0; i < 3; i++) {
    const transaction = await dappcord.connect(accounts[0]).createChannel(CHANNEL_NAMES[i], COSTS[i]);
    await transaction.wait();
    console.log(`Created text channel #${CHANNEL_NAMES[i]}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
