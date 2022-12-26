const students = [{ name: 'George', age: 28}, { name: 'Oliver', age: 17}, { name: 'Anna', age: 20}];

function upperCaseName(user){
  user.name = user.name.toUpperCase();
  return user;
}

const upperCasedStudents = students.map(upperCaseName);

console.log(students, upperCasedStudents);