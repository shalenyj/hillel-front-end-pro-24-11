function checkIfOdd(number){
  const isOdd = number % 2 === 0;
  return isOdd;
}

function checkIfEven(number){
  const isEven = number % 2 !== 0;
  return isEven;
  console.log(`${number} is even - ${isEven}`);
}

const sum = new Function('a', 'b', 'return a + b');

alert(sum(1, 2)); // 3