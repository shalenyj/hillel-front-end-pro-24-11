// Функції вищого порядку

function checkIfOdd(number){
  return number % 2
}

function checkIfEven(number){
  return !(number % 2)
}

function filterArray(arr, filterCb){
  const nArray = [];
  for(const item of arr){
    if(filterCb(item)){
      nArray.push(item)
    }
  }
  return nArray;
}

console.log(filterArray([2,5,7,8], checkIfEven))
console.log(filterArray([2,5,7,8], checkIfOdd))
