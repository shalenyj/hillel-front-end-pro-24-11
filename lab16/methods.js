const user = {
  name: 'Ivan',
  sayHello(){
    console.log(`Hello, ${this.name}`)
  },
  sayAnotherHello: function () {
    console.log(`Hello from, ${this.name}`)
  },
}
user.sayHello();
user.sayAnotherHello();