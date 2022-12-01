const numberAsString = prompt('Введіть число');
const number = parseInt(numberAsString);

if(number > 0){
  console.log('Число позитивне');
} else {
  console.log('Число негативне');
}
