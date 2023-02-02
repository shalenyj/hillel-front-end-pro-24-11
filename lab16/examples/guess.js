function guessingGame(){
  const answer = Math.floor(Math.random()*10);
  let guesses=0;
  return function (guess){
      guesses++;
      if(guess === answer) {
        console.log(`You got it! number was ${guess} in ${guesses} guesses`);
        return true;
      };
      if(guess>answer) {
        console.log('Too high!');
        return false;
      };
      console.log('Too low!');
      return false;
    };
}

const try1= guessingGame();

for(let i=1; i++;){
  const guessed = try1(i);
  
  if(guessed){
    break;
  }
}
