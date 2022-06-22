/**
 Stock checker - 4
Use the array of products from exercise-14. 
Write a function that takes the products and a product name.
	The function then return a product array that doesn't include 
	the product with the given name. 
	(The function deletes the given product name if it exists)
 */

    const products = {
        prod1: {name: "Towel", price: 25, stockAmount: 0},
        prod2: {name: "Shower gell", price: 5, stockAmount: 9},
        prod3: {name: "Shampo", price: 6, stockAmount: 10},
        prod4: {name: "Conditioner", price: 6, stockAmount: 8},
        prod5: {name: "Scrub", price: 8, stockAmount: 6},
        prod6: {name: "Shower cape", price: 3, stockAmount: 2},
        prod7: {name: "Scruber", price: 7, stockAmount: 0}
    };
    //console.log(products);