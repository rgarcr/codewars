// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

//My solution
function highestRank(arr) {
    let countObj = {};
    for (let i = 0; i < arr.length; i++)
        countObj[arr[i]] ? countObj[arr[i]]++ : countObj[arr[i]] = 1;
    let maxCount = 0;
    let maxKey = 0;
    for (let key in countObj)
        if (maxCount <= countObj[key]) {
            maxCount = countObj[key]
            maxKey = key;
        }
    return +maxKey;
}