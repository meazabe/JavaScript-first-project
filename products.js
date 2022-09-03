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

const pros = products.reduce((accumulator, number) => {
  if (number.includes("Pro")) {
    return accumulator += 1;
  } else {
    return accumulator;
  }
}, 0);

const sumOfPros = products.filter((name) => { 
  if (name.includes("Pro"))  return name;
});
//console.log(sumOfPros.length);

// Task 7. Print an array that has either iOS or Android for each product based on the name
// e.g. if the product has iphone in the name, it should be iOS; otherwise it should be android
// the resulting array could be ["iOS", "iOS", "iOS", "Android", "Android", "Android", "Android"...]

const typeOfPhones = products.map((str) => {
  if (str.includes("iPhone")) {
    return "iOS";
  } else {
    return "Android";
  }
});
//console.log(typeOfPhones);

// Task 8. Print an array with the count of words for each product. Numbers could be regarded as words
// the resulting array could look sth like this [2, 3, 4, 2, 2, 3, 3, 2, 2, 3, 3, 3, 2, 2...]

const wordCount = products.map((str) => { 
 const words = str.split(" ")
  return words.length;
});
//console.log(wordCount);

// Task 9. Print only the products that end with "Pro"

const onlyPros = products.filter((str) => {
  if (str.slice(-3) === "Pro") {
    return str;
  }
});
//console.log(onlyPros);

// Task 10. Print the products that are NOT in the favorites array
const notFavorites = products.filter((name) => {  return !favorites.find((item) => name === item); });
console.log(notFavorites); 

// Task 11. Check if all the items in favorites are iPhones (have "iPhone" in the name). Print the boolean output.

let checkFavorites = favorites.every((name) => name.includes("iPhone"));
//console.log(checkFavorites);

// Task 12. Check if any of the items in favorites contain the number 12 or 13. Print the boolean output.

checkFavorites = favorites.some((name) => name.includes(12) || name.includes(13));
//console.log(checkFavorites);


