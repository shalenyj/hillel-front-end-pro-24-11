const student1 = 'John';
const student2 = 'Oliver';
const student3 = 'George';
const student4 = 'Fernando';
const student5 = 'Santiago';
const student6 = 'Petro';

console.group('Список студентів за успішністю');
console.log(`Студент номер 1: ${student1}`);
console.log(`Студент номер 2: ${student2}`);
console.log(`Студент номер 3: ${student3}`);
console.log(`Студент номер 4: ${student4}`);
console.log(`Студент номер 5: ${student5}`);
console.log(`Студент номер 6: ${student6}`);
console.groupEnd();

//

const students = ['John', 'Oliver', 'George', 'Fernando', 'Santiago', 'Petro'];

console.group('Список студентів за успішністю через масив');
for(let i = 0; i< students.length; i++){
  const element = students[i];
  console.log(`Студент номер ${i+1}: ${element}`);
}
console.groupEnd();
