
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli:{
      url:'https://eth-goerli.alchemyapi.io/v2/GwINduXluMHVql24bo0HxK2NIGjBZQif',
      accounts:[ '00b1ee0b683e11a3bd2a6d690e582c7df17f81882fc464bc96c61349010a7dc5' ]
    }
  }
}