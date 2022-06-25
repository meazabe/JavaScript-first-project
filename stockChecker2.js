/**
 Stock checker - 2
Use the array of products from the previous exercise. 
Write a function that returns the products that are available in stock.  
 */

function availableProductsFilter(){
    const products = [
        {name: "Towel", price: 25, stockAmount: 0},
        {name: "Shower gell", price: 5, stockAmount: 9},
        {name: "Shampo", price: 6, stockAmount: 10},
        {name: "Conditioner", price: 6, stockAmount: 8},
        {name: "Scrub", price: 8, stockAmount: 6},
        {name: "Shower cape", price: 3, stockAmount: 2},
        {name: "Scruber", price: 7, stockAmount: 0}
   ];
    let i = 0;
    while (i < products.length && products[i].stockAmount > 0){
        console.log(products[i].name);
        i++;
    }
    
}

availableProductsFilter();






