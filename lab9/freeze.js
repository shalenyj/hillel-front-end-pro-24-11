const user = {
  name: 'John',
  age: 83,
};

user.age = 54;

Object.freeze(user);

user.age = 34;
user.country = 'Ukraine';
delete user.name;

console.log(user, Object.isFrozen(user));