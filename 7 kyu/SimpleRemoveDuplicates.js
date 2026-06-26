// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

//My solution
function solve(arr) {
    let arrU = []

    for (let i = arr.length - 1; i >= 0; i--) {
        if (!arrU.includes(arr[i]))
            arrU.unshift(arr[i]);
    }
    return arrU
}