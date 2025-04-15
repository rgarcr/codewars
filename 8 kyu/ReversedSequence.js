// Build a function that returns an array of integers from n to 1 where n>0.

//My solution

const reverseSeq = n => {
    const arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    }
    return arr;
};