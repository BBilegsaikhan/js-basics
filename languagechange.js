let text = "12/6/2023";
let oldText = "12/5/2023";
let oldText1 = "12/4/2023";
const date1 = new Date();
console.log(date1);
const date = new Date().toLocaleDateString("en-MN");
if (date >= oldText) {
  console.log("yes");
} else console.log("no");
console.log(typeof date);
