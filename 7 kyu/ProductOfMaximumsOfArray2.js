// Given an array/list [] of integers , Find the product of the k maximal numbers.

// maxProduct ({4, 3, 5}, 2) ==>  return (20)


//My solution

function maxProduct(numbers, size) {
    return numbers.sort((a, b) => a - b)
        .slice(numbers.length - size)
        .reduce((acc, curr, i, arr) => acc *= curr);
}