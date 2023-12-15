// Write a JavaScript program that prints the elements of the following array.Note : 
// Use nested for loops.Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];Sample Output :"row 0"" 1"" 2"" 1"" 24""row 1"------------
function 
let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
    // Only change code above this line
    console.log(product);
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);