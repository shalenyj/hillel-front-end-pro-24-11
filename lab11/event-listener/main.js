const main = document.getElementsByTagName('main')[0];

function handleInput(event){
  console.group('Input element event',);
 // console.log(event)
  console.log(`Inputed value into: ${event.target.id}`, event.target.value);
  console.groupEnd();
}

const myInput = document.getElementById('name');
myInput.addEventListener('input', handleInput);

document.getElementById('city').addEventListener('change', handleInput);


function handleClick(event){
  alert(`clicked button ${event.target.id}`);
}

document.getElementById('my-btn').addEventListener('click', handleClick);
document.getElementById('another-btn').addEventListener('click', handleClick);

//document.getElementById('another-btn').removeEventListener('click',  handleClick)

/*
click
input
submit
changed
focus
mouseout
mouseover
keydown
*/

// інші варіанти додавання слухачів подій

//Prevent default

// function clickWithPrevent(event){
//   console.log('no refresh')
// }
// document.getElementById('my-btn').removeEventListener('click', handleClick)
// document.getElementById('my-btn').addEventListener('click', clickWithPrevent)