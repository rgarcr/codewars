// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

//My Solution
//turn to string, filter if not a number, reduce by adding all absolute values

function sumDigits(number) {
    console.log(number)
    return number == 0 ? +number : number.toString().split("").filter(elem => elem >= 0).reduce((acc, curr) => {
        acc = Math.abs(+acc) + Math.abs(+curr);
        return acc
    });
}