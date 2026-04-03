// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

//My solution
function divCon(x){
   let num = 0;
  let strNum = 0;

  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      num+=x[i];
    } else {
      strNum+= Number(x[i])
    }
  }
  return num-strNum
}