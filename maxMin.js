/*
Write a function that takes three numbers and write two more functions 
which calculate and return the largest and smallest of these numbers.
The first function should print what is returned from 
the functions largest and smallest.
*/
const a = 0;
const b = 0;
const c = 0;
function comparator(a,b,c) {
    function largest(a,b,c) {
    let result;
    if (a > b && a > c) {
        result = a + " is the largest.";
    } else if (b > a && b > c) {
        result = b + " is the largest.";
    } else if (c > a && c > b) {
        result = c + " is the largest.";
    }
    return result;
    }

function smallest(a,b,c) {
    let result;
    if (a < b && a < c) {
        result = a + " is the smallest and ";
    } else if (b < a && b < c) {
        result = b + " is the smallest and ";
    } else if (c < a && c < b) {
        result = c + " is the smallest and ";
    } else {
        result = largest;
    }
    return result;
    }

return smallest(a,b,c) + largest(a,b,c);
}



console.log(comparator(9,7,1));


// I saw this max and min method on W3 but nothing is clear for me
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
// Would you consider to explain maaybe in the next meeting? 
// Becouse the code is shorter than the one I did for the exercise but not clear.