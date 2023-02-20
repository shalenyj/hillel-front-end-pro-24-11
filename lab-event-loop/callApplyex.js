// Оголошуємо об'єкт автомібль
const car = {
  brand: 'BMW',
  model: 'X5',
  startEngine() {
    console.log(`Starting the ${this.brand} ${this.model} engine...`);
  },
  stopEngine() {
    console.log(`Stopping the ${this.brand} ${this.model} engine...`);
  },
  showOptions(...options){
    console.group(`${this.brand} ${this.model} has next options`)
    for(const option of options){
      console.log(option)
    }
    console.groupEnd()
  }
};

// Викликаємо startEngine метод обєкта car з обєктом трака
car.startEngine.call({ brand: 'Ford', model: 'F-150' });

// Викликаємо stopEngine метод обєкта car з обєктом трака
car.stopEngine.apply({ brand: 'Chevrolet', model: 'Silverado' });

// Викликаємо showOptions метод обєкта car з обєктом трака і аргументами у вигляді аргументів
car.showOptions.call({ brand: 'Ford', model: 'F-150' }, 'Фаркоп', 'Кондиціонер', 'Люк');

// Викликаємо showOptions метод обєкта car з обєктом трака і аргументами у вигляді масиву
car.showOptions.apply({ brand: 'Chevrolet', model: 'Silverado' }, ['Фаркоп', 'Кондиціонер', 'Панорама']);