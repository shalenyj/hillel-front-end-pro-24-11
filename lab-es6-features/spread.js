//
const myFunc = (x, y, z) =>  {
  console.log('Y', y) // 1
}
const args = [0, 1, 2];
myFunc(...args);

//
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2]
console.log(arr1); // [0,1,2,3,4,5]

//
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
console.log(clonedObj) //{ foo: "bar", x: 42 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj) // { foo: "bar", x: 42, y: 13 };