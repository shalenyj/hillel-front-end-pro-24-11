class SpeedRecordsAtLap{
  static maxPossibleSpeed = 500;
  constructor(maxSpeed){
    this.maxSpeed = maxSpeed;
  }
  showMaxSpeed(){
    console.log(`Max speed: equal ${this.maxSpeed}`)
  }
  static kmToMiles(value){
    return value * 0.62
  }
}

const fordFocus = new SpeedRecordsAtLap(340);
fordFocus.showMaxSpeed();

const miles = SpeedRecordsAtLap.kmToMiles(400);
console.log('400 km in miles', miles)
console.log('Current record', SpeedRecordsAtLap.maxPossibleSpeed)

class SpeedRecordAtSprint extends SpeedRecordsAtLap{
  static maxPossibleSpeed = 350;
  constructor(maxSpeed){
    super(maxSpeed);
  }
}

const fordFusion = new SpeedRecordAtSprint(321);
console.log('300 km in miles', SpeedRecordAtSprint.kmToMiles(300))
console.log('Current record', SpeedRecordAtSprint.maxPossibleSpeed)