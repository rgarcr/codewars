//Write a program that finds the summation of every number from 1 to num. 
//The number will always be a positive integer greater than 0. 
//Your function only needs to return the result. 

var summation = function (num) {
    let sum = 1;
    for (let i = 2; i <= num; i++) {
        sum += i;
    }
    return sum;
}