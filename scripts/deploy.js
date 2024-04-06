const { ethers, network } = require('hardhat');

async function main() {
    const Transactions = await ethers.getContractFactory('Transactions');
    console.log('deploying contracts ....');
    const transactions = await Transactions.deploy();
    await transactions.waitForDeployment();
    const address = await transactions.getAddress();
    console.log('deployed contract address:', address);

    const receiverAddress = '0x90F79bf6EB2c4f870365E785982E1f101E93b906'; // Replace with the receiver's address
    const amount = 100; // Replace with the amount
    const message = 'Hello'; // Replace with your message
    const keyword = 'Example'; // Replace with your keyword
    const tx = await transactions.addToBlockchain(receiverAddress, amount, message, keyword);
    await tx.wait();
    console.log('Transaction successful.');

    const allTransactions = await transactions.getAllTransactions();
    console.log('All transactions:', allTransactions);

    const transactionCount = await transactions.getTransactionCount();
    console.log('Transaction count:', transactionCount);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
