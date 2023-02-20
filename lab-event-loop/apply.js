function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

const result = sum.apply(null, numbers);

console.log(Math.max(1,2,31,5,8))

console.log(Math.max.apply(Math, [1,2,31,5,8]))
