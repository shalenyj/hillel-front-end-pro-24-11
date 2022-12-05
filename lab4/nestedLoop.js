const ITERATIONS  = 10;

for(let i=0; i< ITERATIONS; i++){
  console.group(i);
  for(let j=0; j< ITERATIONS; j++){
    console.log(j);
  }
  console.groupEnd();
}