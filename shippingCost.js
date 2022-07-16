/*
You want to buy something from an online shop. 
The seller charges different prices for shipping cost based on location. 
The shipping cost is 5€ for EU,  15€ for US & Canada, 20€ else where. 
Write a function that takes the cost of the product and location. 
It should print the amount of money you have to pay as:
"You have to pay a total of 35€, 30€ for the product and 5€ for shipping"
*/

const productCost = 70;
const location = 'EU';

 function shippingCostCalculator(location) {
     let result; 
     if (location == 'EU') {
         result = 5;
     } else if (location == 'US' || location == 'Canada') {
         result = 15;
     } else {
         result = 20;
     }
     return result;
 }

 function totalCost(productCost, location) {
     const shippingCost = shippingCostCalculator(location);
    return shippingCost + productCost;
     
}

 /*function productCostCalculator(productCost) {
    return productCost
 }
 */
 
 

 let totalPrice = 'You have to pay a total of' + ' ' + totalCost(productCost, location) + '€' + ', ' + productCost + 
 '€' + ' ' + 'for the product and' + ' ' + shippingCostCalculator(location) + '€' + ' ' + 'for shipping.';
 console.log(totalPrice);


