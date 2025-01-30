// Complete the function which takes a non-zero integer as its argument.

// If the integer is divisible by 3, return the string "Java".

// If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

// If one of the condition above is true and the integer is even, add "Script" to the end of the string.

// If none of the condition is true, return the string "mocha_missing!"

//My solution

function caffeineBuzz(n) {
    let string = "";
    if (n % 3 == 0 && n % 4 == 0)
        string = 'Coffee';
    else if (n % 3 == 0)
        string = "Java"
    else
        return "mocha_missing!";

    if (n % 2 === 0)
        string += 'Script';

    return string;

}