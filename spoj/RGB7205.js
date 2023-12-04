function print(x) {
  let sum = 1;
  for (let a = 1; a <= x; a = a + 1) {
    sum = sum * a;
  }
  console.log(sum);
}
print(5);
