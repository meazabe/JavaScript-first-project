/*
Write a function that takes price and discount percentage as parameters and 
calculates the discounted price. 
The function should give an error message if the price or percentage are < 0. 
(e.g. If price = 30€, discount = 50%, new price should be 15€)

15 = 30 - (30 * (50 / 100));
*/
/*
function discountCalculator(price, discount) {
    let result;
    if (price >= 0 && discount >= 0) {
        result = price - (price * (discount/100));
    } else {
        result = "error!";
    }
    return result;
}
*/

function discountCalculator(price, discount) {
    if (price >= 0 && discount >= 0) {
        return price - (price * (discount/100));
    } 

    return "error";
}

let discountedPrice = "Discounted price = " + discountCalculator(76, 50);
console.log(discountedPrice);