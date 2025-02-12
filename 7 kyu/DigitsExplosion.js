//Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.



//My solution
function explode(s) {
    let newStr = '';
    for (let i = 0; i < s.length; i++) {
        newStr += s[i].repeat(s[i]);
    }
    return newStr;
}