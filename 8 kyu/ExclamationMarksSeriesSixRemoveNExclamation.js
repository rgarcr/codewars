// Remove n exclamation marks in the sentence from left to right. n is positive integer.

//My solution
function remove(s, n) {
    let newS = ''
    for (let i = 0; i < s.length; i++) {
        if (n <= 0 || s[i] != "!")
            newS += s[i]
        else
            n--
    }
    return newS;

}