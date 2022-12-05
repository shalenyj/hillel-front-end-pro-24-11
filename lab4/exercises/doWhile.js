// generate a secret number between 1 and 10
const MIN = 1;
const MAX = 10;

const secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let guesses = 0; 
let hint = '';
let number = 0;
do {
  number = parseInt(prompt(`Введи число між ${MIN} та ${MAX}` + hint));

  guesses++;
  
  if (number > secretNumber) {
    hint = ', і менше за ' + number;
  }
  if (number < secretNumber) {
    hint = ', і більше за ' + number;
  }
  if (number === secretNumber) {
    alert(`Вітаю, після  ${guesses} спроб ти відгадав.`);
  }
} while (number != secretNumber);

console.log('tyt');