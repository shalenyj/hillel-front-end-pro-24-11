// Hoisting
console.log(`Hello ${surname}`);
var surname = 'Smith';
////////////////
console.log(`Hello ${name}`);
let name = 'John';

// Перевизначення

var myAge = 28;
var myAge = 89;

var yourAge = 15;
yourAge = 16;
//////////////
let age = 18;
let age =20;

let yourAge = 89;
yourAge = 55;

// Область видимості

var greeter = "hey hi";
var times = 4;

if (times > 3) {
  var greeter = "say Hello instead"; 
  console.log(greeter);
}
    
console.log(greeter)

/////////////

let anotherGreeter = "hey hallo";
const myTimes = 4;

if (myTimes > 3) {
  let anotherGreeter = "say Hello instead"; 
  console.log(anotherGreeter);
}
    
console.log(anotherGreeter) // "say Hello instead"