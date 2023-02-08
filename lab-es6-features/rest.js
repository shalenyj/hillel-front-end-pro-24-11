const func = (a, b, ...restArgs) => {
  console.log("a", a);
  console.log("b", b);
  console.log("restArgs", restArgs);
}

func("one", "two", "three", "four", "five", "six");

// const sum = (...args) => {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3));

// console.log(sum(1, 2, 3, 4));