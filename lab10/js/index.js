const firstDiv = document.getElementById('my-favorite-id');
console.log(firstDiv.innerText);
console.log(firstDiv.innerHTML);

console.log(document.getElementsByClassName('.title'));

console.log(document.getElementsByTagName('div'));

const firstInSelector = document.querySelector('div p');
firstInSelector.style.fontSize = '30px';

console.log(document.querySelectorAll('div p'));

const list = document.querySelectorAll('div p');

for(const node of list){
  console.log(node, node.innerText);
}