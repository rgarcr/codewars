// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. 
//If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
//The input will be a non-negative integer.

//My solution

function digitalRoot(n) {
    //base case n < 10 to have a single digit
    if(n < 10) return n;
    //call digitalRoot with new parameters of all digits added
    return digitalRoot(n.toString().split("").reduce((acc, curr) => +acc + +curr));
  }