const students = [{ name: 'George', age: 28}, { name: 'Oliver', age: 17}, { name: 'Anna', age: 20}];

function findOliver(user){
  return user.name === 'Oliver';
}

const oliverUser = students.find(findOliver);

console.log(oliverUser);
