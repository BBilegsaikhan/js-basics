const shoppingCartItems = [
  { name: "Laptop", price: 1200, quantity: 1, category: "Electronics" },
  { name: "Backpack", price: 80, quantity: 2, category: "Fashion" },
  { name: "Smartphone", price: 800, quantity: 1, category: "Electronics" },
  { name: "Shoes", price: 50, quantity: 1, category: "Fashion" },
  { name: "Book", price: 15, quantity: 3, category: "Books" },
  { name: "Headphones", price: 100, quantity: 1, category: "Electronics" },
  { name: "T-shirt", price: 20, quantity: 5, category: "Fashion" },
  { name: "Tablet", price: 300, quantity: 2, category: "Electronics" },
  { name: "Jeans", price: 60, quantity: 2, category: "Fashion" },
  { name: "Notebook", price: 10, quantity: 4, category: "Books" },
  { name: "Camera", price: 500, quantity: 1, category: "Electronics" },
  { name: "Dress", price: 70, quantity: 1, category: "Fashion" },
  {
    name: "External Hard Drive",
    price: 80,
    quantity: 1,
    category: "Electronics",
  },
  { name: "Sweater", price: 40, quantity: 3, category: "Fashion" },
  { name: "Fitness Tracker", price: 60, quantity: 1, category: "Electronics" },
  { name: "Sunglasses", price: 25, quantity: 2, category: "Fashion" },
  { name: "Cookbook", price: 18, quantity: 2, category: "Books" },
  { name: "Gaming Console", price: 300, quantity: 1, category: "Electronics" },
  { name: "Running Shoes", price: 55, quantity: 1, category: "Fashion" },
  { name: "Desk Chair", price: 120, quantity: 1, category: "Furniture" },
];
function findtotalCost(disc) {
  let total = shoppingCartItems.map((a) => {
    return {
      name: a.name,
      quantity: a.quantity,
      price: a.price - (a.price * disc) / 100,
      totalCost: (a.price - (a.price * disc) / 100) * a.quantity,
    };
  });
  return total;
}
findtotalCost(10);
//discounttai product uudiin bvh price iin dundajiig olood
//dundajaas ih bolon baga productuudiig gargaj ir
function avgDisc() {
  let avg = 0;
  let discPrice = findtotalCost(10);
  for (let i = 0; i < discPrice.length; i++) {
    avg = avg + discPrice[i].price;
  }
  avg = avg / discPrice.length;
  console.log(avg);
  return avg;
}
avgDisc();

function findmoreAvg() {
  let moreAvg = findtotalCost(10);
  let average = avgDisc();
  let mAvg = moreAvg.filter((a) => a.price > average);
  console.log(mAvg);
}
findmoreAvg();
