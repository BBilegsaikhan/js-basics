let products = [
  {
    name: "Smartphone",
    price: 599.99,
    stock: 50,
    category: "Electronics",
    brand: "Samsung",
  },
  {
    name: "Laptop",
    price: 1099.99,
    stock: 30,
    category: "Electronics",
    brand: "Apple",
  },
  {
    name: "Headphones",
    price: 129.99,
    stock: 100,
    category: "Electronics",
    brand: "Sony",
  },
  {
    name: "Running Shoes",
    price: 79.99,
    stock: 80,
    category: "Sports",
    brand: "Nike",
  },
  {
    name: "Coffee Maker",
    price: 49.99,
    stock: 20,
    category: "Home Appliances",
    brand: "Keurig",
  },
  {
    name: "Backpack",
    price: 39.99,
    stock: 60,
    category: "Fashion",
    brand: "Adidas",
  },
  {
    name: "Watch",
    price: 199.99,
    stock: 40,
    category: "Accessories",
    brand: "Casio",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    stock: 25,
    category: "Electronics",
    brand: "Microsoft",
  },
  {
    name: "Sunglasses",
    price: 149.99,
    stock: 70,
    category: "Fashion",
    brand: "Ray-Ban",
  },
  {
    name: "Wireless Speaker",
    price: 89.99,
    stock: 45,
    category: "Electronics",
    brand: "JBL",
  },
];

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

let evenArr=nums.filter((a) => {
  return a % 2 == 0;
});
console.log("evenArr:" , evenArr);
//filter ni unen esvel hudlaa gdg zuiliig butsaah ystoi.shine array uusgej ogdog.
