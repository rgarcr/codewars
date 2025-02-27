// Your task is simply to count the total number of lowercase letters in a string.

//My solution

function lowercaseCount(str) {
    let m = str.match(/[a-z]/g)
    return m ? m.length : 0
}