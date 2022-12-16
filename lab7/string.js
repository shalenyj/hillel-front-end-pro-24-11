const myString = '  List of students: Andrii, Olha, Maria, John  ';

console.log(`Length: ${myString.length}`);

console.log(`Method: toUpperCase: ${myString.toUpperCase()}`);
console.log(`Method: toLowerCase: ${myString.toLowerCase()}`);

console.log(`Method: trim: ${myString.trim()}`);

console.log(`Method: slice: ${myString.slice(5, 10)}`);
console.log(`Method: split: ${myString.split(',')}`);

console.log(`Method: indexOf: ${myString.indexOf('a')}`);
console.log(`Method: includes: ${myString.includes('Olha')}`);

console.log(`Method: replace: ${myString.replace('Maria', 'George')}`);

console.log(`myString: ${myString}`);