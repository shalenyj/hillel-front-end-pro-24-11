const arrOfObjects = [{ number: 1}, { number: 2}, { number: 3}, { number: 4}];

// Deep clone
const deepCloneOfArrOfObjects = JSON.parse(JSON.stringify(arrOfObjects));
deepCloneOfArrOfObjects[2].number = 9;
console.log('spread Objects', deepCloneOfArrOfObjects[2].number, arrOfObjects[2].number);