function sayHello(event){
  console.log('Hello', event.target.value)
}

input.addEventListener('change',sayHello);

input.addEventListener('change',function(event){
  console.log('Hello from anonym', event.target.value)
});
