const fs = require('fs');

const text = 'Це текст, який буде записаний у файл.';

fs.writeFile('text.txt', text, (err) => {
  if (err) throw err;
  console.log('Текст було успішно записано у файл!');
});


fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});