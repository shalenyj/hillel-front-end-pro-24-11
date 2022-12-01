const age = 17;
const canDriveCar = age >= 18 ? true : false;

console.log(canDriveCar ? 'Ви можете вести автомобіль' : 'Ви не можете вести автомобіль');

const anotherAge = 19;
const canDrive = anotherAge < 18 
? 'Велосипед' 
: age > 20 
  ? 'Автобус' 
  : 'Автомобіль';

console.log(`Ви можете вести ${canDrive}`);