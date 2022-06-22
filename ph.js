/* Write a function that takes a ph value and 
returns whether the value is acidic, neutral or alkaline. 
// (PH value < 7 is acidic, 7 is neutral, > 7 alkaline)*/



function phLevelCalculator(ph) {
    let result;
    if (ph >= 0 && ph < 7) {
        result = 'acidic';
    } else if (ph === 7) {
        result = 'neutral';
    } else if (ph > 7 && ph <= 14) {
        result = 'basic';
    } else {
        result = 'invalid';
    }

    return result;

}

let solution = " The solution is "  + phLevelCalculator(14) + ".";
console.log(solution);

