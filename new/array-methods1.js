//products.sort((prod1, prod2) => {
// return prod1.price - prod2.price;
//});
//console.log(products);
products.map((prod) => {});
products.filter();

//let nums = [1,2,3,4,5,1,3,1,3];
//nums.map((a)=> {
//console.log(a);
//return 1;
//});
let nums = [1, 2, 3, 4, 5, 1, 3, 1, 3];
let newNums = nums.map((a) => {
  return 1;
});
console.log(newNums);
console.log(nums);

let evenArr = nums.filter((a) => {
  return a % 2 == 0;
});
console.log("evenArr:", evenArr);
//filter ni unen esvel hudlaa gdg zuiliig butsaah ystoi.shine array uusgej ogdog.
