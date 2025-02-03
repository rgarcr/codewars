// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.


//My solution

function createPhoneNumber(numbers) {
    let first = `(${numbers[0]}${numbers[1]}${numbers[2]})`;
    let sec = ` ${numbers[3]}${numbers[4]}${numbers[5]}`;
    let third = `-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

    return first + sec + third;

}