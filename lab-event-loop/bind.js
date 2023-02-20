const person = {
  name: 'John',
  age: 30,
  greet() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
};

const friend = {
  name: 'Jane',
  age: 25
};

const greetFriend = person.greet.bind(friend);
greetFriend();


//
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.startEngine = function() {
  console.log(`Starting the ${this.brand} ${this.model} engine...`);
};

const car1 = new Car('BMW', 'X5');

const startEngineForAnotherCar = car1.startEngine.bind({ brand: 'Ford', model: 'F-150' });

startEngineForAnotherCar();