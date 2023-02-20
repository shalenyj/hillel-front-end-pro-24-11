const person = {
  name: 'John',
  greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}.`);
  }
};

const friend = {
  name: 'Jane'
};

person.greet.call(friend, 'Hi');

const stepan = {
  name: 'Stepan'
}

person.greet.call(stepan, 'Aloha')
