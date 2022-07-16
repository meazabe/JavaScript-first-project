/*
Sum of working hours
Write a function that takes a parameter array of working hours 
(e.g. [4, 5, 7.5, 8.5, 9, 6]), 
the function should return the sum of the working hours.
*/
/*
let sum = workingHour.reduce(workHourCalculator);

function workHourCalculator(total,value) {
    return total + value;
}

console.log("The sum of the working hours is " + sum);
*/


const workingHour = [4, 5, 7.5, 8.5, 9, 6, 10];
let workingHourSum = 0;
for (i = 0; i < workingHour.length; i++) {
    workingHourSum = workingHourSum + workingHour[i];
}

console.log("Total work hour is " + workingHourSum);

