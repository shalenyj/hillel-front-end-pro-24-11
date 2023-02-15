class Car {
  constructor(name){
    this.name = name;
  }
  drive(){
    console.log(`Driving ${this.name}`)
  }
  turnOnNeutralGear(){
    console.log(`At neutral gear`)
  }
}

class SportCar extends Car {
  constructor(name, topSpeed){
    super(name)
    this.topSpeed = topSpeed
  }
  turnOnNeutralGear(){
    console.log(`We don't have neutral, we have acceleration`)
    super.turnOnNeutralGear()
    //TODO: how call parrent method
  }
  runAsFastAsPossible(){
    console.log(`We at ${this.topSpeed} km/h`)
  }
}