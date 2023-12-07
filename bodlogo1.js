let products = [
  {
    name: "IPhone",
    year: "2020",
    category: "MobilePhone",
    brand: "Apple",
    price: 4000000,
    stock : 1000
  },
  {
    name: "VacuumCleaner",
    year: "2020",
    category: "Cleaner",
    brand: "Vacuum",
    price: 1000000,
    stock : 10000
  },
  {
    name: "Dellcomputer",
    year: "2000",
    category: "electron",
    brand: "Dell",
    price: 5000000,
    stock : 1500
  },
  {
    name: "SamsungFridge",
    year: "2021",
    category: "electron",
    brand: "Samsung",
    price: 5500000,
    stock : 500
  },
  {
    name: "Water boiler",
    year: "2022",
    category: "electron",
    brand: "Boiler",
    price: 100000,
    stock : 2000
  },
  {
    name: "Sony TV",
    year: "2023",
    category: "electron",
    brand: "Sonycompany",
    price: 6000000,
    stock : 50
  },
  {
    name: "Playstation 5",
    year: "2016",
    category: "electron",
    brand: "Sony",
    price: 3000000,
    stock : 300
  },
  {
    name: "Blackberry Phone",
    year: "2015",
    category: "electron",
    brand: "Blackberry",
    price: 1000000,
    stock : 1500
  },
  {
    name: "Round Table",
    year: "2022",
    category: "Furniture",
    brand: "IKEA",
    price: 500000,
    stock : 10
  },
  {
    name: "Iron",
    year: "2021",
    category: "electron",
    brand: "Samsung",
    price: 150000,
    stock : 30000
  },
];
//for (let i = 0; i < 10; i = i + 1) {
//if (products[i].category == "electron") {
// console.log(products[i]);
//}
//}
//function findByCategory(cate) {
//for (let i = 0; i < 10; i = i + 1) {
//if (products[i].category == cate) {
//   console.log(products[i]);
//}
//}
//}
//findByCategory("Furniture");
function expensive() {
  let mostExpensive = products[0].price;
  for (let i = 0; i < products.length; i = i + 1) {
    if (mostExpensive < products[i].price) {
      mostExpensive = products[i].price;
    }
  }
  console.log(mostExpensive);
}
expensive();

