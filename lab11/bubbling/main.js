const output = document.querySelector('#output');

function handleClick(event) {
  output.innerHTML += `You clicked on a ${event.currentTarget.tagName} element\n`;
}
const container = document.querySelector('#container');
const button = document.querySelector('button');

document.body.addEventListener('click', handleClick);
container.addEventListener('click', handleClick);
button.addEventListener('click', handleClick);

//stopPropagation


//capture

// document.body.addEventListener('click', handleClick, { capture: true });
// container.addEventListener('click', handleClick, { capture: true });
// button.addEventListener('click', handleClick)