// Sentence Calculator
// Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

// Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
// Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
// Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
// Other characters: 0 value
// Note: input will always be a string

//My solution

function lettersToNumbers(s) {
    let total = 0;

    let lMatch = s.match(/[a-z]/g) || [];
    total += lMatch.reduce((a, c) => a + (c.charCodeAt() - 96), total);

    let uMatch = s.match(/[A-Z]/g) || [];
    total += uMatch.reduce((a, c) => (a + (c.toLowerCase().charCodeAt() - 96) * 2), 0);

    let nMatch = s.match(/[0-9]/g) || [];
    total += nMatch.reduce((a, c) => a + +c, 0)

    return total
}