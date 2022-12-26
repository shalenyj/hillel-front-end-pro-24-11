const user = {
  name: 'John',
  age: 83,
  cities: [
    'Lviv', 'York'
  ],
};

for(const prop in user){
  console.log(`user ${prop}: ${user[prop]}`);
}