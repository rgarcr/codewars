// There is an array with some numbers. All numbers are equal except for one. Try to find it!

//My solution

function findUniq(arr) {
    let num;
    let list = new Set(arr);
    list.forEach(key => {
        if (arr.indexOf(key) == arr.lastIndexOf(key))
            num = key;
    })
    return num;
}