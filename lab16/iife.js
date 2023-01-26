//Immediately Invoked Function Expression
// Функція яка буде викликана моментально

(function sayHello() {
  console.log('Hello')
})();

(function sayHelloName(name) {
  console.log(`Hello, ${name}`)
})();


// Polluting
