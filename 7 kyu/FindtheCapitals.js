//Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, 
//and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
//"CodEWaRs" --> [0,3,4,6]




// My solution
//turn string into an array
//use reduce to return an array only adding the index of values that are capital 
var capitals = function (word) {
    return word.split('').reduce((acc, curr, i) => {
        if (curr === curr.toUpperCase()) acc.push(i)
        return acc
    }, [])
};