// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

//My solution

function countPositivesSumNegatives(input) {
    if (!input || !input.length) return []

    let posNumCount = 0;
    let negNumCount = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0)
            posNumCount++;
        if (input[i] < 0)
            negNumCount += input[i];
    }

    return [posNumCount, negNumCount];
}