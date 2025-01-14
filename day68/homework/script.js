// 1
function createMatrix(n, m) {
    let matrix = Array.from({ length: n }, () => Array(m).fill(0));
    let num = 1;
  
    for (let col = 0; col < m; col++) {
      for (let row = 0; row < n; row++) {
        matrix[row][col] = num++;
      }
    }
    
    return matrix;
  }
  
  // 2
  function printMatrixProperties(matrix) {
    const n = matrix.length;
  
    // 1) სვეტები
    console.log("სვეტები:");
    for (let col = 0; col < n; col++) {
      let column = [];
      for (let row = 0; row < n; row++) {
        column.push(matrix[row][col]);
      }
      console.log(column);
    }
  
    // 2) რიგები
    console.log("\nრიგები:");
    matrix.forEach(row => console.log(row));
  
    // 3) დიაგონალები
    console.log("\nდიაგონალები:");
    let mainDiagonal = [];
    let secondaryDiagonal = [];
    
    for (let i = 0; i < n; i++) {
      mainDiagonal.push(matrix[i][i]);
      secondaryDiagonal.push(matrix[i][n - i - 1]);
    }
    
    console.log("მთავარი დიაგონალი:", mainDiagonal);
    console.log("მეორეული დიაგონალი:", secondaryDiagonal);
  }
  
  let matrix = createMatrix(3, 3); 
  console.log("მატრიცა:");
  matrix.forEach(row => console.log(row));
  
  console.log("\nმატრიცის თვისებები:");
  printMatrixProperties(matrix);
  