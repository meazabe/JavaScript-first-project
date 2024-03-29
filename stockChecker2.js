/**
 Stock checker - 2
Use the array of products from the previous exercise. 
Write a function that returns the products that are available in stock.  
 availableProduct = products[i].name + " not available";
 */

function availableProductsFilter(products){
     let result = [];
    for (let i = 0; i < products.length; i++){
        if (products[i].stockAmount > 0){
            result.push(products[i]);
        } 
    }
    return result;
}

const products = [
    {name: "Towel", price: 25, stockAmount: 4},
    {name: "Shower gell", price: 5, stockAmount: 0},
    {name: "Shampo", price: 6, stockAmount: 10},
    {name: "Conditioner", price: 6, stockAmount: 0},
    {name: "Scrub", price: 8, stockAmount: 8},
    {name: "Shower cape", price: 3, stockAmount: 9},
    {name: "Scruber", price: 7, stockAmount: 2},
    {name: "hair brush", price: 4, stockAmount: 13}
];

console.log(availableProductsFilter(products));





