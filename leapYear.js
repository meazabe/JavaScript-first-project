/*
Leap year calculator. Write a function that takes a year and determines if it is a leap year or not
How to determine whether a year is a leap year 
To determine whether a year is a leap year, follow these steps:
1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
4. The year is a leap year (it has 366 days).
5. The year is not a leap year (it has 365 days).
*/


const someYear = 2018;
function stepFive() { 
    let result = "The year is not a leap year (it has 365 days).";
    return result;
 }
function stepFour() { 
    let result = "The year is a leap year (it has 366 days).";
    return result;
 }
function stepThree(year) {
    let result;
    if (year % 400 === 0) {
        result = stepFour();
    } else {
        result = stepFive();
    }
    return result;
}
function stepTwo(year) { 
    let result;
    if (year % 100 === 0) {
        result = stepThree(year);
    } else {
        result = stepFour();
    }
    return result;
}
function stepOne(year) {
    let result;
    if (year % 4 === 0) {
        result = stepTwo(year);
    } else {
        result = stepFive();
    }
    return result;
}


//console.log(stepOne(2024));
stepOne(2024);