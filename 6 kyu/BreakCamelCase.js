// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//My solution

function solution(string) {
    let newStr = "";
    let sliceStart = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            newStr += string.slice(sliceStart, i) + " ";
            sliceStart = i;
        }
        if (i === string.length - 1)
            newStr += string.slice(sliceStart);
    }
    return newStr;
}