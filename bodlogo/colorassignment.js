// 1. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];Expected Output :"Red,Green,White,Black""Red,Green,White,Black""Red+Green+White+Black"
let myColor = ["Red", "Green", "White", "Black"];
let color1 = myColor.join(",");
console.log(color1);
let color2 = myColor.join(" ");
console.log(color2);
let color3 = myColor.join("+");
console.log(color3);
