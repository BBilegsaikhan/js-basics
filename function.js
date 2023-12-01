// function declaration
function doSomething(input) {
  console.log(input);
  return input * input;
}

//function calling
let result = doSomething(15);
console.log(result);

function printHello() {
  console.log("Hello World");
}
//printHello ymar ch ym ogohgui,butsaadaggui

function getSomething(input) {
  console.log("Input:", input);
}
//getSomething ymar negen zuil avdag
function returnSomething() {
  return "Hello World";
}
//returnSomething ym avahgui,ymar negen zuil butsaadag

printHello();

getSomething("MY TEXT");

function getMultiInput(num1, num2) {
  console.log("num1 = ", num1);
  console.log("num2 = ", num2);
  let sum = num1 + num2;
  return sum;
}
let myDuu = getMultiInput(20, 30);

console.log("sum=", sum);

function findMonth(num) {
  if (num == 1) {
    return "January";
  } else if (num == 2) {
    return "February";
  } else if (num == 3) {
    return "March";
  } else if (num == 4) {
    return "April";
  } else if (num == 5) {
    return "May";
  } else if (num == 6) {
    return "June";
  } else if (num == 7) {
    return "July";
  } else if (num == 8) {
    return "August";
  } else if (num == 9) {
    return "September";
  } else if ((num = 10)) {
    return "October";
  } else if ((num = 11)) {
    return "November";
  } else if ((num = 12)) {
    return "December";
  }
}
let MonthInText = findMonth(8);
console.log(MonthInText);

function final(mid1, mid2, final) {
  let num = mid1 * 0.25 + mid2 * 0.25 + final * 0.5;
  if (num < 80) {
    return "F";
  } else if (num < 90) {
    return "D";
  } else if (num < 100) {
    return "C";
  }
}

let midterm = final(50);
console.log(finalScore);
