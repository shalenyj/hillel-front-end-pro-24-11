const user = {
  name: 'Anna',
  age: 22
}

Object.defineProperty(user, 'surname', {
  value: 'Smith',
  writable: false,
  configurable: true,
})

console.log(Object.getOwnPropertyDescriptor(user, 'surname'))