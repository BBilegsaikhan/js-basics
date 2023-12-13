//let gechij ch bolno
const doSomething = (input) => {
  console.log("Doing something");
};
//arrow function
(input) => {
  console.log("Doing something");
};
//anonymous function (deed tal)
doSomething("Hello");

function parentFunction() {
  console.log("Doing something");
}
let passingFunction = (input) => {
  console.log("Doing Anotherthing:", input);
};

let addF = (a, b) => {
  return a + b;
};

let subF = (a, b) => {
  return a - b;
};
let multiF = (a, b) => {
  return a * b;
};
let divF = (a, b) => {
  return a / b;
};
let powF = (a, b) => {
  return a ** b;
};
const mathOperation = (num1, num2, operation) => {
  return operation(num1, num2);
};
//const uurchilj bolohgui
//mathOperation duudah bol zaaval 3 dahiig ni function bolgoh ystoi.
const result = mathOperation(10, 20, multiF);
console.log(result);
