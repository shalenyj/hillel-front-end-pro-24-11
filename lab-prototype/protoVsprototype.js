function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
}

const person = new Person("John");
console.log(person.__proto__ === Person.prototype); // true