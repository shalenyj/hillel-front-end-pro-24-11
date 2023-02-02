fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET'
})
  .then(res => {
    console.log(res);
    return res.json();
  })
  .then(res => console.log(res));
  //.then(res => createListItems(res));

// TODO: show catch

// const listParent = document.querySelector('ul');

// const createListItems = items => {
//   items.slice(0, 5).forEach(createItem);
// };

// const createItem = item => {
//   const listElement = document.createElement('li');
//   listElement.innerHTML = `<p>${item.title}</p><span>${item.body}</span>`;
//   listParent.append(listElement);
// };


// ADD

// const form = document.forms[0];
// form.addEventListener('submit', event => {
//   event.preventDefault();

//   //Form requrest body
//   const body = {
//     title: form.title.value,
//     body: form.body.value,
//     userId: 2,
//   };

//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({body}), // треба зробити json
//   })
//     .then(res => {
//       if(res.status === 201) {
//         createItem(body);
//       }
//       form.reset();
//     });
// });