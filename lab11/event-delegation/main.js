function random(number) {
  return Math.floor(Math.random()*number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

function clickHandler(event){
  console.log(event.target);
  event.target.style.backgroundColor = bgChange();
}

const container = document.querySelector('#container');

container.addEventListener('click', clickHandler );