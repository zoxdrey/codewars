function getEvenNumbers(numbersArray){
    let result = [];
    result = numbersArray.filter(item => item % 2 == 0)
    return result;
  }

module.exports = getEvenNumbers;