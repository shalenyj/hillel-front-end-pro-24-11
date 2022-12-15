const myName = 'John';

function greeting(){
  const myName = 'George';
  console.log('Inside', myName);
}
greeting();
console.log('Outside', myName);