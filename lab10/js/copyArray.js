const arrOfPrimitives = [1, 2, 3, 4];
const arrOfObjects = [{ number: 1}, { number: 2}, { number: 3}, { number: 4}];

// Assign
const newArrOfPrimitives = arrOfPrimitives;
newArrOfPrimitives[2] = 20;
console.log('assign primitives', newArrOfPrimitives[2], arrOfPrimitives[2]);

// // Primitives
// const spreadCopyOfArrOfPrimitives = [...arrOfPrimitives];
// spreadCopyOfArrOfPrimitives[2] = 10;
// console.log('spread primitives', spreadCopyOfArrOfPrimitives[2], arrOfPrimitives[2]);

// // Objects
// const spreadCopyOfArrOfObjects = [...arrOfObjects];
// spreadCopyOfArrOfObjects[2].number = 10;
// console.log('spread Objects', spreadCopyOfArrOfObjects[2].number, arrOfObjects[2].number);

