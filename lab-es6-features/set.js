const mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add("some text"); // Set { 1, 5, 'some text' }

console.log(mySet);

console.log(mySet.has(5))
console.log(mySet.has(4))

mySet.delete(1)

console.log(mySet);

console.group('Iteration')
for (const item of mySet) {
  console.log(item);
}
console.groupEnd()