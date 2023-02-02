const input = document.querySelector('input');

input.addEventListener('input', function(event){
  console.log('From func', this);
});

input.addEventListener('input', (event) => {
  console.log('From func', this);
});