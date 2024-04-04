async function testSendEth() {
  myAddress = '0xA52A57E67f2BbAe57682c8610A4AdC068812f906';
  toAddress = '0x89056eAD055cA3A4157e2A71da6f3362E59dAdB5';
  privateKey = '09dc1fad3586eb6d224778d278742bf9ca937070317f67194d2d8e6ad135f15b';

  try {
    await sendEth();
    console.log('Test passed: Ethereum has been sent successfully!');
  } catch (error) {
    console.log('Test failed:', error);
  }
}

testSendEth();