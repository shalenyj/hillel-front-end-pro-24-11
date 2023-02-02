const main = document.getElementsByTagName('main')[0];

const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'Другий параграф';
newParagraph.style.fontSize = '18px';
newParagraph.style.color = 'green';

main.append(newParagraph);

const myTextNode = document.createTextNode('Текст який буде доданий без тегу');
main.append(myTextNode);

// insertBefore

// const paragraphToPut = document.createElement('p')
// paragraphToPut.innerHTML = 'Третій параграф';
// paragraphToPut.style.fontSize = '18px';
// paragraphToPut.style.color = 'red';

// const elementToPutBefore = document.querySelector('main p');

// main.insertBefore(paragraphToPut, elementToPutBefore)


// remove
//document.getElementsByTagName('header')[0].remove()