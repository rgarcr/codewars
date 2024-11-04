// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.



//My solution

function alphabetPosition(text) {
    return text.toLowerCase().split("").reduce((acc, curr) => {
        let utfNum = curr.charCodeAt(0);
        if (utfNum >= 97 && utfNum <= 122)
            acc += utfNum - 96 + " ";
        return acc;
    }, "").trim();
}