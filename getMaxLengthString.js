const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString === null || arrayOfString === undefined) {
    return undefined
  }
  let eve = [arrayOfString[0]]
  for (let i=1 ; i<arrayOfString.length ; i++){
    if (arrayOfString[i].length> eve[0].length) {
      eve = [arrayOfString[i]]
    }
    else if(arrayOfString[i].length === eve[0].length) {
      eve.push(arrayOfString[i]) 
    }
  }
  return eve
}
module.exports = getMaxLengthString
