// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

//My solution


function minValue(values){
    return Number(values.sort((a,b) => a-b)
    .filter((elem, index, array) => elem!= array[index+1])
    .join(""));
  }