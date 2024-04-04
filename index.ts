import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/your-infura-key'));

const myAddress = '0x1234...';
const toAddress = '0x5678...';
const privateKey = 'abcd....';

async function sendEth() {
  try {
    const transactionCount = await web3.eth.getTransactionCount(myAddress);

    const txData = {
      nonce:    web3.utils.toHex(transactionCount),
      gasLimit: web3.utils.toHex(25000),
      gasPrice: web3.utils.toHex(10e9),
      to:       toAddress,
      from:     myAddress,
      value:    web3.utils.toHex(web3.utils.toWei('0.01', 'ether'))
    };
      
    const signedTransaction = await web3.eth.accounts.signTransaction(txData, privateKey);
      
    const txReceipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction as string);
    
    console.log('Transaction hash:', txReceipt.transactionHash);

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

sendEth();