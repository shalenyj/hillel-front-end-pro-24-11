const students = [{ name: 'George', age: 28}, { name: 'Oliver', age: 17}, { name: 'Anna', age: 20}];

function addAllAges(accumulator, user){
  return accumulator + user.age;
}

const sumOfAllAges = students.reduce(addAllAges, 0);

console.log(sumOfAllAges);
