const user = {
  name: 'George',
  city: 'York',
  country: 'Ireland',
  greetingFromCountry(){
    console.log(`Hello ${this.city} ${this.country}`);
  },
  checkIfSameCountry(countryToCheck){
    return countryToCheck === this.country;
  }
};

user.greetingFromCountry();

console.log(user.checkIfSameCountry('Ukraine'));
console.log(user.checkIfSameCountry('Ireland'));