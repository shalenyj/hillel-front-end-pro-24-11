for(let i = 0; i< 10; i++){
  if(!(i % 2)){
    continue;
  }
  console.log(`Я номер ${i}`);
}

let i = 0;

while(i < 10){
  if(!(i % 2)){
    continue;
  }
  console.log(`Я номер ${i}`);
  i++;
}