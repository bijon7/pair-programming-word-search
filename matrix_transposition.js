const transpose = function(matrix) {

  let newMatrix = [];
  
  let j = 0;

  while (j < matrix[0].length ) {
    let newMatrixInnerArray = [];
    for (let i = 0; i < matrix.length; i++) {
          

           newMatrixInnerArray.push(matrix[i][j])

           

    }  
    j++;

    newMatrix.push(newMatrixInnerArray); 
  }
   
  
  
  return newMatrix;
};

//Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));
