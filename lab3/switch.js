const language = prompt('Введіть мову якою спілкуєтесь');

switch(language){
  case 'українська':
    console.log('Привіт');
    break;
  case 'іспанська':
    console.log('Hola');
    break;
  case 'німецька':
    console.log('Hallo');
    break;
  case 'англійська':
    console.log('Hello');
    break;
  default:
    console.log('I don\'t know this language');
}

