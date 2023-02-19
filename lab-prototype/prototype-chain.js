const user = {
  name: 'Ivan',
  age: 28,
  sayHello(){
    console.log(`Hello, ${this.name}`)
  }
};

const user2 = Object.create(user)
user2.name = 'John';


console.log(user, user2)

// hasOwnProperty

console.log(user2.hasOwnProperty('name')) 
console.log(user2.hasOwnProperty('age')) 

console.log('name' in user2) 
console.log('age' in user2) 

//TODO: Create third user to inherite user2