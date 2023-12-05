// RGB7211 - Тооны зэргийн хүрд
// a тооны n хүртэлх зэрэгтүүдийг жишээн дээрх хэлбэрээр хэвлэ.

// Input
// a, n натурал тоонууд нэг мөрөнд нэг зайгаар тусгаарлагдан өгөгдөнө. (a,n<10)

// Output
// Зэргийн хүрдийг хэвлэ.

// Example
// Input:
// 3 5

// Output:
// 3^1=3
// 3^2=9
// 3^3=27
// 3^4=81
// 3^5=243
function findNum(x, n) {
  let product = 1;
  for (i = 1; i < 6; i++) {
    product = product * x;
    console.log(product);
  }
}
findNum(3, 5);
