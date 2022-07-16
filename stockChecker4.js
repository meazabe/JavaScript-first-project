/**
 Stock checker - 4
Use the array of products from exercise-14. 
Write a function that takes the products and a product name.
	The function then return a product array that doesn't include 
	the product with the given name. 
	(The function deletes the given product name if it exists)
 */

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


   function productOmitter(name){
        let result = [ ];
        for (let i = 0; i < products.length; i++){
            if (products[i].name !== name){
               result.push(products[i]);
            }  
        }
       return result;
    }
    let productName = "hair brush";

   console.log(productOmitter(productName));
