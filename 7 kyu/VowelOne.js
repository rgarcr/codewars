// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

function vowelOne(s) {
    let result = ''
    for (let i = 0; i < s.length; i++) {
        if (/[aeiou]/gi.test(s[i])) {
            result += 1
        }
        else {
            result += 0
        }
    }
    return result
}