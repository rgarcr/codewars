// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array) {
    let arr = [0, 0]
    array.forEach((elem, index) => (index % 2 === 0) ? arr[0] += elem : arr[1] += elem)
    return arr;
}