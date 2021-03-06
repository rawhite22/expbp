// packages
const chalk = require('chalk')
// data base name
const dbURI = (dbName) => {
  const uri = `mongodb://127.0.0.1:27017/${dbName}`
  return uri
}
// chalk functions for node console
const successMsg = (msg = '') => {
  console.log(chalk.bgGreen.black(msg))
}
// exports
module.exports = {
  dbURI,
  successMsg,
}
