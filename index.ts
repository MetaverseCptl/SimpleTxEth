
const providerUrl = "your provider url";
const provider = new ethers.providers.JsonRpcProvider(providerUrl);

const myAddress = '0xA52A57E67f2BbAe57682c8610A4AdC068812f906';
const toAddress = '0x89056eAD055cA3A4157e2A71da6f3362E59dAdB5';

const privateKey = '09dc1fad3586eb6d224778d278742bf9ca937070317f67194d2d8e6ad135f15b';

const sendEth = async () => {
  const wallet = new ethers.Wallet(privateKey, provider);
  const amountEth = 1;
  const amountWei = ethers.utils.parseEther(amountEth.toString());
  const transaction = { to: toAddress, value: amountWei, };
  const transactionResponse = await wallet.sendTransaction(transaction);
  return transactionResponse.hash;
};

const getTransactionStatus = async (transactionHash: string) => {
  const txReceipt = await provider.getTransactionReceipt(transactionHash);
  if (txReceipt && txReceipt.status === 1) {
    console.log('Transaction successful!', transactionHash);
  } else {
    console.log('Transaction failed:', transactionHash);
  }
};

const testSendEth = async () => {
  try {
    const transactionHash = await sendEth();
    console.log('Transaction hash:', transactionHash);
    await getTransactionStatus(transactionHash);
  } catch (error) {
    console.log('Test failed:', error);
  }
}
