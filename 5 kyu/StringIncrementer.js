// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// My solution 

//check if ending string is a number and replace with adding 1 with the match while including leading zeros using padStart
function incrementString(strng) {
    let matchNum = strng.replace(/(?<=.*)\d{1,}(?!.)/g, (m) => {
        let newStr = +m + 1;
        return newStr.toString().padStart(m.length, "0");

    });

    //if no number add 1 to string
    if (!/\d/g.test(matchNum))
        matchNum += 1;

    return matchNum;

}

