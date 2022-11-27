const age = 12;
const wrappedAge = new Number(23);

console.group('Age');
console.log('Age', age, typeof age);
console.log('wrappedAge', wrappedAge, typeof wrappedAge);
console.groupEnd();

const name = 'Ivan';
const wrappedName = new String('John');

console.group('Name');
console.log('name', name, typeof name);
console.log('wrappedName', wrappedName, typeof wrappedName);
console.groupEnd();

const isUkrainian = true;
const wrappedIsUkrainian = new Boolean(true);

console.group('isUkrainian');
console.log('isUkrainian', isUkrainian, typeof isUkrainian);
console.log('wrappedIsUkrainian', wrappedIsUkrainian, typeof wrappedIsUkrainian);
console.groupEnd();


