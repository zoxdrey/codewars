function twoSum(numbers, target) {
  let result = []
  for(let i = 0; i < numbers.length; i++ ){
    let firstNumber = numbers[i]; //1
    let secondNumber = target - firstNumber; //3
    if(getIndexOfNumber(numbers, secondNumber) != -1){
     let firstIndex = getIndexOfNumber(numbers, firstNumber)
      let secondIndex = numbers.lastIndexOf(secondNumber)
      result.push(firstIndex)
      result.push(secondIndex)
     return result
    }
  }
  return result
}

function getIndexOfNumber(array , num){
  return array.findIndex(item => item == num)
}
module.exports = twoSum
