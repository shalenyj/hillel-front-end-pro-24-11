const students = [{ name: 'George', age: 28}, { name: 'Oliver', age: 17}, { name: 'Anna', age: 20}];

function only18Plus(user){
  const isOlder18 = user.age >= 18;
  return isOlder18;
}

const filteredStudents = students.filter(only18Plus);

console.log(filteredStudents, students);