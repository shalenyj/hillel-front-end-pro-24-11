const user = {
  name: 'Ivan',
  age: 25,
  car: {
    model: 'Renault',
    year: 2002
  },
  children: ['Olga', 'George']
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

for(const pair of Object.entries(user)){
  console.log(pair)
}