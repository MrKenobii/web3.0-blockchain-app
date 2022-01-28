//https://eth-ropsten.alchemyapi.io/v2/sVCYo30jlx_BBHiNz24Nwsl1AxSK13bj

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/sVCYo30jlx_BBHiNz24Nwsl1AxSK13bj',
      accounts: ['5e4b8cbdab9e986a204ce4189e3c5efbf4b31c12075be4745dfcfdcd93716099']
    }
  }
}