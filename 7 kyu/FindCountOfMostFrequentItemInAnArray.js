// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0


//My solution

function mostFrequentItemCount(collection) {

    let map = collection.reduce((a, c) => {
        a[c] ? a[c]++ : a[c] = 1;
        return a;
    }, {});

    let most = 0;

    for (const key in map) {
        most = most < map[key] ? map[key] : most;
    }
    return most;
}