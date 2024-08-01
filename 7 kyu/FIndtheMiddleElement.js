/*
  As a part of this Kata, you need to create a function that when provided with a triplet, 
  returns the index of the numerical element that lies between the other two elements.

  The input to the function will be an array of three distinct numbers (Haskell: a tuple).
  gimme([2, 3, 1]) => 
  gimme([5, 10, 14]) => 1
    
*/


//My solution 

function gimme(triplet) {
    //get copy of array and sort
    let sortArr = triplet.slice().sort((a, b) => a - b);
    //get middle value
    let middle = sortArr[1];
    //return middle value of org array
    return triplet.indexOf(middle);
}