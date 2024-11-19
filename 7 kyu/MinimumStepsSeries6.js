// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.


//My solution

function minimumSteps(numbers, value) {
    let counter = 0;
    numbers.sort((a, b) => a - b);
    let sum = numbers[0];
    if (sum > value) return 0;
    for (let i = 1; i < numbers.length; i++) {
        counter++;
        if ((sum += numbers[i]) >= value) {
            break;
        }
    }
    return counter;
}
