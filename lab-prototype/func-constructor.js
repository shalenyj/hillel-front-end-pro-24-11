function Car(model, maxGear){
  this.model = model;
  this.gear = 1;
  this.maxGear = maxGear;
  
  this.gearPosition = function(){
    return `Car ${this.model} at ${this.gear} gear`
  }
}


//TODO: show arrow func diff
Car.prototype.turnOnGear = function(gear){
  if(gear > this.maxGear){
    return `Max gear is ${this.maxGear}`
  }
  this.gear = gear;
}



// instanceof

