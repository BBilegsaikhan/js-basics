function isPrime(num) {
  let some;
  let val;
  let mult = 1;
  for (let i = 2; i < num; i++) {
    val = num % i;
    mult = mult * val;
    if (mult != 0) {
      some = true;
    } else {
      some = false;
    }
  }
  return some;
}
isPrime(100);
console.log(isPrime);
