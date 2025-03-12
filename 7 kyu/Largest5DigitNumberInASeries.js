// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

function solution(digits) {
    //get first five as max
    let max = digits.slice(0, 5);
    // have a temp variable to add and remove characters
    let temp = max;
    //loop rest of string starting index 5
    for (let i = max.length; i < digits.length; i++) {
        // remove first character and next from digits 
        temp = temp.slice(1) + digits[i];
        //compare max with temp
        max = +max < +temp ? temp : max;
    }
    return +max
}