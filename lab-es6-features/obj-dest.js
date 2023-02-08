// Old
const person = {
  name: 'John',
  age: 37
};

const name = person.name;
const age = person.age; 
console.log(name)
console.log(age)

// New

// const person = {
//   name: 'John',
//   age: 37
// };

// const { name: myName, age: someAge } = person;
// console.log(myName) // John
// console.log(someAge) // 37

// const user = {
//   firstName: 'Eliot',
//   secondName: 'Smith'
// }

// const { firstName, secondName } = user
// console.log(firstName, secondName)


// const user2 = {
//   firstName: 'Eliot',
//   city: 'Lviv',
//   car: {
//     model: 'Tesla X',
//     year: 2022
//   }
// }

// const { city, car: { model }} = user2;
// console.log(city, model)

// myInput.addEventListener('input', handleInput);
// const handleInput = ({ target }) => {
//   console.log(target) // It will event.target
// }


// const sayHello = ({ name, age }) => {
//   console.log(`Hello ${name}, you are ${age} old`)
// }
// const myUser = {
//   name: 'Ostap',
//   age: 22,
//   city: 'Ternopil'
// }

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   currentAge: 28
// };

// const { firstName, lastName, middleName = '', currentAge: age = 18 } = person;

// console.log(middleName); // ''
// console.log(age); // 28