let nums = [1, 2, 1, 2, 3, 5, 1, 51, 25, 12, 31, 56, 124, 1];
nums.sort((a, b) => a - b);
console.log(nums);
//sort ni function,sort ni 2 utga avah ystoi
//num.sort((a,b))=>{
//return a-b;
//});
//let myFunction=(a,b)=>{
//return a-b;
//}
//num.sort(function);

const fruits = [
  "Apple",
  "orange",
  "banana",
  "mango",
  "pineapple",
  "strawberry",
];
fruits.sort((a, b) => {
  if (a < b) {
    return -1;
  } else {
    return 1;
  }
});
console.log(fruits);
//fruits[fruits.length] = "Watermelon";
//if (fruits[0] < fruits[1]) {
//console.log("Stay");
//} else {
//console.log("swap");
//}
