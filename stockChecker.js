/*
Stock checker
Let's write a program that filters out products that are out of stock.
Write a function that takes an array of products as a parameter. 
The product should be an object with name, price, and stockAmount. 
Add multiple products to the array, with varying stock amount, 
where some of the products have stock amount 0. 

Return the total sum of all the items in stock. 

e.g. if prod-1 has 4 items, prod-2 has 6, prod-3 has 5 => 
total should be 4+6+5=15
*/

const products = [
    {name: "Towel", price: 25, stockAmount: 10},
    {name: "Shower gell", price: 5, stockAmount: 9},
    {name: "Shampo", price: 6, stockAmount: 10},
    {name: "Conditioner", price: 6, stockAmount: 8},
    {name: "Scrub", price: 8, stockAmount: 6},
    {name: "Shower cape", price: 3, stockAmount: 2},
    {name: "Scruber", price: 7, stockAmount: 0}
];
//console.log(products);
console.log(products.length);

function stockBalance (products) {
    let result = 0;
    for (i = 0; i < products.lenght; i++) {
        result = result + products[i];
    }
    return result;
}

console.log(stockBalance(products));


    

     

