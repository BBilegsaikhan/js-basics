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
function findPrime(number1, number2) {
  let subarr = [];
  let count = 0;
  for (let a = number1; a <= number2; a++) {
    if (isPrime(a) == true) {
      subarr[count] = a;
      count++;
    }
  }
  return subarr;
}
let aPrime = findPrime(2, 100);
console.log(aPrime);
