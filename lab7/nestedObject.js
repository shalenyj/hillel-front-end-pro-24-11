const user = {
  name: 'Leonardo',
  age: 34,
  isMarried: false,
  car: {
    model: 'Passat',
    number: 'ZN 6733 Ao',
    previosOwner: {
      name: 'Stepan',
      city: 'Lyon'
    }
  }
};

console.log(`Car model: ${user.car.model}`);
console.log(`Car previos owner city: ${user.car.previosOwner.city}`);