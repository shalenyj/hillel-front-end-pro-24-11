const greeting = function(user){
  console.log(`Hello ${user.name} ${user.surname}`);
};

const john = {
  name: 'John',
  surname: 'Smith',
  age: 38,
};

greeting(john);

const oliver = {};
oliver.name = 'Oliver';
oliver.surname = 'Smith';
oliver.age = '77';

greeting(oliver);
