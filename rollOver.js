/*
Write a function that prints this version of children's song
"10 in the bed, the little one said rollover, 1 fell off" 
"9 in the bed.."
"8 in the bed.."
...
"1 in the bed, the little on said I am lonely!"

"The little one said, Everybody back on the bed!"
*/


function theSong() {
    let first = " in the bed and the little one said, roll over, roll over,so they all rolled over and one fell out."
    let second = " in the bed, the little on said I am lonely!"
    let third = "The little one said, Everybody back on the bed!"
    let i = 10

   while (i > 1) {
        console.log("There were " + i + first);
        i--;
    }

    console.log("There were 1" + second);
    console.log(third);
}

theSong();
