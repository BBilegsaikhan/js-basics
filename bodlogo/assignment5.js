// // Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
function insertDash(num) {
  {
    let strArr = num.split("");
    let numArr = strArr.map(Number);
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i - 1] % 2 === 0 && numArr[i] % 2 === 0) {
        numArr.splice(i, 0, "-");
      }
    }
    return numArr.join("");
  }
}
console.log(insertDash("025468"));
