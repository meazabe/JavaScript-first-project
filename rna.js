/*
RNA Transcriber
(The science of this might not be accurate)
Write a function that takes DNA strand as a parameter. 
The four nucleotides found in DNA are 
adenine (A), cytosine (C), guanine (G) and thymine (T).
So, the function should accept any sequence of A, C, G, & T, in any order. 
A matches with T, G matches with C. 

Your function should return the complement of the given strand. 

e.g. if given G, A, T, C the output should be C, T, A, G
*/
/*
Pass an array, loop thru the array, everytime you translate one element, 
collect it into another array like a basket
*/

const nucleotides1 = ["C", "G", "A", "T", "G", "T", "C", "A", "G", "A", "T", "C"];
function nucleotiedsMutchMaker(nucleotides1) {
    let result = [];
    for (let i = 0; i < nucleotides1.length; i++) {
         if ( nucleotides1[i] === "A") {
        result.push("T");
    } else if (nucleotides1[i] === "G") {
        result.push("C");
    } else if (nucleotides1[i] === "C") {
        result.push("G");
    } else if (nucleotides1[i] === "T") {
        result.push("A");
    }
    }
   return result;
}
console.log(nucleotiedsMutchMaker(nucleotides1));



