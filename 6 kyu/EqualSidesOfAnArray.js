// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

// If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
    if (arr.length === 1)
        return 0;

    let index = 0;
    let left = 0;
    let right = arr.slice(index + 1).reduce((a, c) => a += c);

    if (left === right)
        return index;

    for (let i = 1; i < arr.length; i++) {
        index += 1;
        if (i === arr.length - 1) {
            right = 0;
        }
        else {
            right = arr.slice(index + 1).reduce((a, c) => a += c);
        }

        left = arr.slice(0, i).reduce((a, c) => a += c);
        if (left === right)
            return index;
    }
    return -1;

}