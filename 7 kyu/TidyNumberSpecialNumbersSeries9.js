// A Tidy Number is a number whose digits are in non-decreasing order.

// Task
// Given a number, determine if it is tidy or not.

// Notes
// The number passed will always be positive.
// Return the result as a boolean.

//My solution
function tidyNumber(n) {
    let nStr = n.toString()
    for (let i = 0; i < nStr.length - 1; i++)
        if (nStr[i] > nStr[i + 1]) return false
    return true
}