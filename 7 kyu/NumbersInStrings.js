// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.



//My solution
function solve(s) {
    let strNum = "";
    let max = 0;

    for (let i = 0; i < s.length; i++) {

        if (Number(s[i]) >= 0) {
            strNum += s[i];

            if (i == s.length - 1) {
                if (max < Number(strNum))
                    max = Number(strNum);
            }

        }

        else if (strNum.length >= 1) {
            if (max < Number(strNum))
                max = Number(strNum);
            strNum = "";
        }

    }
    return max;
};