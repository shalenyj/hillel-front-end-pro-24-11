const people = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 20 },
  { name: 'Bob', age: 30 },
  { name: 'Alice', age: 22 }
];

people.sort((a, b) => {
  if(a.age < b.age){
    return -1
  }
  if(a.age > b.age){
    return 1
  }
  return 0
});

console.log(people);