// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

//My solution

function sameCase(a, b) {
    const numA = a.charCodeAt();
    const numB = b.charCodeAt();
    if (((numA >= 97 && numA <= 122) && (numB >= 97 && numB <= 127)) ||
        ((numA >= 65 && numA <= 90) && (numB >= 65 && numB <= 90)))
        return 1
    else if (((numA >= 97 && numA <= 122) && (numB >= 65 && numB <= 90)) ||
        (numA >= 65 && numA <= 90 && numB >= 97 && numB <= 122))
        return 0
    else
        return -1
}