/*
Barcode scanner
Write a program that simulates a barcode scanner.

Hint: Write a function that returns an array of products.
The product object should have the barcode string.
Write another function that takes a barcode string and 
returns the product that matches the given barcode.
*/
const products = [
    {name: "Towel", price: 25, stockAmount: 4, barcodeString: "987965AR56"},
    {name: "Shower gell", price: 5, stockAmount: 0, barcodeString: "693875YD87"},
    {name: "Shampo", price: 6, stockAmount: 10, barcodeString: "979652HT38"},
    {name: "Conditioner", price: 6, stockAmount: 0, barcodeString: "696485KH63"},
    {name: "Scrub", price: 8, stockAmount: 8, barcodeString: "254876KJ78"},
    {name: "Shower cape", price: 3, stockAmount: 9, barcodeString: "854684JH76"},
    {name: "Scruber", price: 7, stockAmount: 2, barcodeString: "769565CF23"},
    {name: "hair brush", price: 4, stockAmount: 13, barcodeString: "423426KD34"}
];
function barcodeScanner(string){
    let result = [ ];
    for (let i = 0; i < products.length; i++){
        if (products[i].barcodeString === string){
            result.push(products[i]);
        }
    }
    return result;
}

const barcode = "696485KH63";
console.log(barcodeScanner(barcode));