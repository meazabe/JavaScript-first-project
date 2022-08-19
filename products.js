// Prerequisites:
// - functions, objects, conditionals
// - arrow functions
// - array functions: map, filter, find, reduce, every, some..

const products = [
    "iPhone 13", 
    "iPhone 13 Pro",
    "iPhone 13 Pro Max",
    "iPhone 12",
    "iPhone 12 Pro",
    "OnePlus 10 Pro",
    "OnePlus 9",
    "Nokia G20",
    "Samsung Galaxy S20",
    "Samsung Galaxy S21",
    "Samsung Galaxy S22",
    "Sony Xperia 10",
    "Xiaomi Redmi 9A",
  ];
  
// console.log(products);

// Task 1. Add new Products: Google Pixel 6 Pro, Motorola Moto G31, Honor X7

products.push("Google Pixel 6 Pro", "Motorola Moto G31", "Honor X7");
//console.log(products);

// Task 2. remove Sony Xperia 10 from the list
//products.splice(11, 1);
//console.log(products);

let filteredProducts = products.filter((name)=> { return name != "Sony Xperia 10"; });
//console.log(filteredProducts);

// Task 3. list the products with "Galaxy" in their names

let lists = products.filter((name)=> { if (name.includes("Galaxy")) return name; });
//console.log(lists);

// Task 4. Add Google Pixel 6 Pro, OnePlus 10 Pro, iPhone 13 Pro Max to favorites

let favorites = [];
favorites.push("Google Pixel 6 Pro", "OnePlus 10 Pro", "iPhone 13 Pro Max");
//console.log(favorites);

// Task 5. remove OnePlus 10 Pro from favorites

let filteredFavorites = favorites.filter((name)=> { return name != "OnePlus 10 Pro"; });
//console.log(filteredFavorites);

// Task 6. Calculate and print the number of products that have "Pro" in their names

const pros = products.reduce( (accumulator, number) => {
  if (number.includes("Pro")) {
    return accumulator += 1;
  } else {
    return accumulator;
  }
}, 0);

const sumOfPros = products.filter((name) => { 
  const listOfPros = [];
  //const length = listOfPros.length;
  if (name.includes("Pro")) {
  listOfPros.push(name);
  }  return listOfPros.length;
});

console.log(sumOfPros);

