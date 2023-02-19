const user = {
  name: 'Anna',
  age: 22
}

Object.defineProperty(user, 'surname', {
  value: 'Smith',
  writable: false,
  enumerable: true,
  configurable: true,
})

console.log(user.surname);

user.surname = 'Potter';

console.log(user.surname)

// Enumerable 

Object.defineProperty(user, 'city', {
  value: 'Lviv',
  enumerable: false,
})

for(const key in user){
  console.log(key, user[key])
}

console.log(Object.keys(user))

// Configurable
Object.defineProperty(user, 'country', {
  value: 'Ukraine',
  configurable: false,
  enumerable: true
})

console.log(user.country)

delete user.country;

console.log(user)