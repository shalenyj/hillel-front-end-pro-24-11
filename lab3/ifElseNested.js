const numberAsString = prompt('Введіть число');
const number = parseInt(numberAsString);

if(number % 2 === 0){
  console.log('Число кратне 2');
  if(number % 4 === 0){
    console.log('Число кратне 4');
  } else {
    console.log('Число не кратне 4');
  }
} else {
  console.log('Число не кратне 2');
}
