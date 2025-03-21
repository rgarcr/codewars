// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
//Write a method that takes the array as an argument and returns this "outlier" N.

//My solution

function findOutlier(integers) {
    let oddEvenObj = {
        even: [],
        odd: []
    };
    for (let num of integers)
        num % 2 === 0 ? oddEvenObj.even.push(num) : oddEvenObj.odd.push(num);

    return oddEvenObj.even.length > oddEvenObj.odd.length ? oddEvenObj.odd[0] : oddEvenObj.even[0];

}