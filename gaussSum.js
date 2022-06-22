/*
Create a program that:
Calculates the sum of 1+2+3+4...+98+99
Prints the sum of 1+2+3+4...+98+99
Output: "The sum is 4950"
*/

let sum = 0;
 for (let number = 1; number < 100; number++) {
     sum += number;
 }

 console.log("The sum is: " + sum);