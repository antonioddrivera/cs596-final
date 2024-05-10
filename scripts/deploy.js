const hre = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  const [deployer] = await ethers.getSigners()
  const NAME = "Dappcord"
  const SYMBOL = "DC"

  const Dappcord = await ethers.getContractFactory("Dappcord")
  const dappcord = await Dappcord.deploy(NAME, SYMBOL)
  await dappcord.deployed()

  console.log(`Deployed Dappcord Contract at: ${dappcord.address}\n`)

  const CHANNEL_NAMES = ["Antonio's Hub", "Neel's Hub", "Ryan's Hub"];
  const COSTS = [tokens(0), tokens(0), tokens(0)];

  for (var i = 0; i < 3; i++) {
    const transaction = await dappcord.connect(deployer).createChannel(CHANNEL_NAMES[i], COSTS[i])
    await transaction.wait()

    console.log(`Created text channel #${CHANNEL_NAMES[i]}`)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});