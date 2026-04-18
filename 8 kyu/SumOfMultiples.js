// Find the sum of all multiples of n below m

// Keep in Mind
// n and m should be natural numbers (positive integers). Otherwise, see the examples in your language about how to handle invalid input values.
// m is excluded from the multiples

//My solution
function sumMul(n, m) {
    let sum = 0;
    for (let i = n; i < m; i += n) {
        sum += i;
    }
    return sum === 0 ? 'INVALID' : sum;
}