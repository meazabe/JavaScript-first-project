/*
Calculates the sum of 1+3+5+7...+99+101
Prints the sum of 1+3+5+7...+99+101
Output: "The sum is 2601"
*/

let oddSum = 0;
 for (number = 1; number < 102; number+=2) {
     oddSum += number;
 }

 console.log("The sum is " + oddSum);