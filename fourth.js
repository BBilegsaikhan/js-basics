let mid1 = 70;
let mid2 = 30;
let final = 90;

let avg = mid1 / 4 + mid2 / 4 + final / 2;
console.log(avg);
if (avg < 60) {
  console.log("F");
} else if (avg < 70) {
  console.log("D");
} else if (avg < 80) {
  console.log("C");
}
