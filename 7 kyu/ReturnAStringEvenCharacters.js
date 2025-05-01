// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

//My solution

function evenChars(string) {
    return string.length > 100 || string.length < 2 ? "invalid string" :
        string.split("").filter((letter, index) => (index + 1) % 2 == 0);

}