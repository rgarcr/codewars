// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//My solution

function high(x) {

    //change string to array of words
    let arr = x.split(" ");

    //map each word into an the number value
    let numArr = arr.map(str => {
        let num = 0;
        for (let i = 0; i < str.length; i++) {
            num += str[i].charCodeAt() - 96;
        }
        return num;
    })

    //find highest numer
    let maxVal = numArr.reduce((acc, cur, i) => {
        return acc < cur ? cur : acc;
    }, 0);

    //find index of highest number in num array
    let index = numArr.indexOf(maxVal);

    //return word with index of highest value
    return arr[index];

}