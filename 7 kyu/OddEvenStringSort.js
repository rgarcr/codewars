// Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part

//My solution
function sortMyString(S) {
    let strOdd = "";
    let strEven = "";
    for (let i = 0; i < S.length; i++) {
        if (i % 2 == 0) {
            strEven += S[i];
        } else {
            strOdd += S[i];
        }
    }
    return strEven + " " + strOdd;
}