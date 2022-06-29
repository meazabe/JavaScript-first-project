/**
 Stock checker - 3
Use the array of products from exercise-14. 
Write a function that takes the products and a product name.
	The function then should return true/false if that product name exists
	in the products array.
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
   
    function productNameChecker(name){
        let result;
        for (let i = 0; i < products.length; i++){
            if (products[i].name === name){
                result = true;
            } else {
                result = false;
            }
        }
        return result;
    }
    let productName = "Scrub";

   console.log(productNameChecker(productName));

    