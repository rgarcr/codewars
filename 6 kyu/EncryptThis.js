// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

//My solution

var encryptThis = function (text) {
    return text.split(" ").map(word => encodeWord(word)).join(" ")
}

function encodeWord(str) {
    const num = str.charCodeAt(0);

    if (str.length === 1)
        return num;
    if (str.length === 2)
        return num + str[1]

    let secondLetter = str[1]
    let lastLetter = str[str.length - 1]
    return num + lastLetter + str.slice(2, str.length - 1) + secondLetter
}