function myDisplayer(text) {
  console.log(text);
}

function myAnotherDisplayer(value){
  console.log(value * 5);
}

function myCalculator(num1, num2, callback) {
  const sum = num1 + num2;
  callback(sum);
}

myCalculator(5, 5, myDisplayer);

myCalculator(5, 5, myAnotherDisplayer);
