/*
function leapYearCalculator(year) {
    let result;
    const step5 = "The year is not a leap year (it has 365 days).";
    const step4 = "The year is a leap year (it has 366 days).";
   function step3(year){
       if (year % 400 === 0) {
        result = step4;
    } else {
        result = step5;
    }
    function step2(year) { 
        if (year % 100 === 0) {
            result = step3;
        } else {
            result = step4;
        }
        function step1(year) {
            if (year % 4 === 0) {
                result = step2;
            } else {
                result = step5;
            }
            
        }
    } 
   } 
   return result;
}

console.log(leapYearCalculator(2020));
*/

/*function getName() {
    return "Meaza"
}

const name = getName;

console.log(name());
*/
/*
const points = [40, 100, 1, 5, 250, 10];
let arr = myArrayMax(points);
function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }

  console.log(myArrayMax(points));

  function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }

  console.log(myArrayMin(points));
*/
/*
function getAverage (a,b,c) {
    let average = (a + b + c)/2;
    return average;
}

console.log(getAverage(2,4,5));
*/
/*
var names = [ 'Mehvish', 'John', 'Henry', 'Thomas'];
displayName(names);

function displayName(){
 	for(var i=0; i<arguments.length; i++){
 		console.log(arguments[i]);
    }
}
*/
/*const nucleotides1 = ["C", "G", "A", "T", "G", "T", "C", "A"];
matchNucleotides(nucleotides1);

function matchNucleotides() {
  // let nucleotides = "";
    let result = "";
    for (let i = 0; i < arguments.length; i++) {
         if (arguments[i] === "A") {
        result = "T";
    } else if (arguments[i] === "G") {
        result = "C";
    } else if (arguments[i] === "C") {
        result = "G";
    } else if (arguments[i] === "T") {
        result = "A";
    }
    console.log(result[i]);
    }
    //console.log(arguments[i]);
}
//console.log(arguments[i]);
*/
//let alepa = { name: "Alepa", employees: 5, smallSize: true};
//let prisma = { name: "Prisma", employees: 255, smallSize: false}; 
//
/*const products = {
    let prod1 = {name: "Towel", price: 25, stockAmount: 6}
    let prod2 = {name: "Shower gell", price: 25, stockAmount: 6}
    let prod3 = {name: "Shampo", price: 25, stockAmount: 6}
    let prod4 = {name: "Conditioner", price: 25, stockAmount: 6}
    let prod5 = {name: "Scrub", price: 25, stockAmount: 6}
    let prod6 = {name: "Shower cape", price: 25, stockAmount: 6}
    let prod7 = {name: "Scruber", price: 25, stockAmount: 6}
}
*/

for in 
Array.find
Array.filter
