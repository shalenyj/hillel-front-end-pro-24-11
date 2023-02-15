class Car {
  constructor(model, maxGear){
    this.model = model;
    this.gear = 1;
    this.maxGear = maxGear
  }
  turnOnGear(gear){
    if(gear > this.maxGear){
      return `Max gear is ${this.maxGear}`
    }
    this.gear = gear;
  }
  gearPosition(){
    return `Car ${this.model} at ${this.gear} gear`
  }
}

//TODO: add upGear and downGear methods

