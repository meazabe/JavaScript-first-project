/*
Write a simple calculator program that calculates 
the difference, sum or product of two numbers. 

The function takes as a parameter, the type of calculation to perform and two numbers.

Then based on the type of calculation given 
(addition, subtraction, multiplication, division), 
it performs the calculation and returns the result. 
*/
//const operator = '+';
function calculator(a,operation,b) {
    let result;
    if (operation == '+') {
        result = a + b;
    } else if (operation == '-') {
        result = a - b;
    } else if (operation == '*') {
        result = a * b;
    } else if (operation == '/') {
        result = a / b;
    }

    return result;

}

console.log(calculator(4, '/', 5));
//calculator(4, '/', 5); Why does this one not work?