const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    if(this.log.length){
      return this.log[this.log.length - 1];
    }
    return 'N/A'
  }
};

console.log(obj.latest) // c
obj.log = ['2']
console.log(obj.latest) // 2
obj.log = []
console.log(obj.latest) // N/A


const user2 = {
  name: 'Anna',
  age: 19,
  get canDriveCar(){
    return age > 18
  }
}



// Setters
const user = {
  _name: "Ivan",
  get name(){
    return this._name
  },
  set name(value){
    this._name = value.trim()
  }
}

user.name = ' Petro    ';
console.log(user.name) // 'Petro'

