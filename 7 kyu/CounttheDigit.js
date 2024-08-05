/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.
*/

//My solution

function nbDig(n, d) {
    let countD = 0;
    for (let i = 0; i <= n; i++) {
        //check if current value squared has d
        let str = String(i ** 2);
        if (str.includes(d)) {
            //loop through the string to count how many characters match d
            for (let j = 0; j < str.length; j++) {
                if (str[j] == d) countD++;
            }
        }
    }
    return countD;
}