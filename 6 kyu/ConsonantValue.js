// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiac", let's cross out the vowels. We get: "z o d ia c"

// "zodiac" -> 26
// The consonant substrings are: "z", "d" and "c" with values "z" = 26, "d" = 4 and "c" = 3. The highest is 26.

//My solution

function solve(s) {
    let max = 0;
    const noConStr = s.replaceAll(/[aeiou]/gi, ",");
    const arr = noConStr.split(",");

    const numArr = arr.map((word) => {
        return word.split("").reduce((a, c) => {
            return a += c.charCodeAt() - 96;
        }, 0)
    });

    for (let i = 0; i < numArr.length; i++) {
        let num = numArr[i];
        if (max < num) max = num;
    }
    return max;
};
