const age = 33;
const name = 'John';
const isMarried = false;
const address = null;
const bio = undefined;

console.log(age, typeof age);
console.log(name, typeof name);
console.log(isMarried, typeof isMarried);
console.log(address, typeof address);
console.log(bio, typeof bio);


const client = {
  name: 'George',
  city: 'Sambir',
  age: 57,
  hasDriverLicence: true,
};
const numbers = [2,4,9];

const gretting = function(name){
  console.warn('Hello ' + name + ' from function');
} ;

gretting('Petro');
gretting('Olena');
gretting(client.name);

console.log(client, typeof client);
console.log(numbers, typeof numbers);
console.log(gretting, typeof gretting);