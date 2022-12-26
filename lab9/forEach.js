const students = [{ name: 'George', age: 28}, { name: 'Oliver', age: 17}, { name: 'Anna', age: 20}];

function changeAgeTo20(user){
  user.age = 20;
}
students.forEach(changeAgeTo20);

console.log(students);
