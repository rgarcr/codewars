// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

//My Solution

function capitalize(s) {
    let arr = ["", ""];
    for (let i = 0; i < s.length; i++) {
        arr[0] += i % 2 == 0 ? s[i].toUpperCase() : s[i];
        arr[1] += i % 2 != 0 ? s[i].toUpperCase() : s[i];
    }
    return arr;
};
