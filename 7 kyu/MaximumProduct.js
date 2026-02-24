//Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.

//My solution
function adjacentElementsProduct(arr) {
    let max = arr[0] * arr[1];
    for (let i = 1; i < arr.length - 1; i++) {
        const prod = arr[i] * arr[i + 1]
        if (max < prod)
            max = prod
    }
    return max
}