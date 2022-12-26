const matrix = [
  [1, 4, 6],
  [2, 5, 7],
  [5, 7, 8]
];

matrix[0][2] = 'A';

console.log(matrix);

function doubleEveryElement(matrix){
  for(let i = 0; i< matrix.length; i++){
    const row = matrix[i];
    console.log(`Element ${i}`, row);
    for(let j=0; j<row.length;j++){
      console.log(`Element ${i}${j}`, row[j]);
    }
  }
}

doubleEveryElement(matrix);