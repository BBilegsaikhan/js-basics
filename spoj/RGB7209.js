// Өгөгдсөн тооны n зэргийг ол.

// Input
// Нэг мөрөнд Int төрлийн эерэг 2  тоо зайгаар тусгаарлагдан өгөгдөнө.

// Output
// an

// Example
// Input:
// 3 4

// Output:
// 81
function findNum(n) {
  let x = 3;
  let sum = 3;
  for (let i = 1; i < n; i++) {
    sum = sum * x;
  }
  console.log(sum);
}
findNum(4);
