let products = [
  {
    name: "IPhone",
    year: "2020",
    category: "MobilePhone",
    brand: "Apple",
    price: 4000000,
  },
  {
    name: "VacuumCleaner",
    year: "2020",
    category: "Cleaner",
    brand: "Vacuum",
    price: 1000000,
  },
  {
    name: "Dellcomputer",
    year: "2000",
    category: "electron",
    brand: "Dell",
    price: 5000000,
  },
  {
    name: "SamsungFridge",
    year: "2021",
    category: "electron",
    brand: "Samsung",
    price: 5500000,
  },
  {
    name: "Water boiler",
    year: "2022",
    category: "electron",
    brand: "Boiler",
    price: 100000,
  },
  {
    name: "Sony TV",
    year: "2023",
    category: "electron",
    brand: "Sonycompany",
    price: 6000000,
  },
  {
    name: "Playstation 5",
    year: "2016",
    category: "electron",
    brand: "Sony",
    price: 3000000,
  },
  {
    name: "Blackberry Phone",
    year: "2015",
    category: "electron",
    brand: "Blackberry",
    price: 1000000,
  },
  {
    name: "Round Table",
    year: "2022",
    category: "Furniture",
    brand: "IKEA",
    price: 500000,
  },
  {
    name: "Iron",
    year: "2021",
    category: "electron",
    brand: "Samsung",
    price: 150000,
  },
];

function set(disc) {
  for (let i = 0; i < products.length; i++) {
    products[i].price = products[i].price - products[i].price * disc;
    console.log(products[i].name, ":", products[i].price);
  }
}

set(0.4);
