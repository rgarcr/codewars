// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//My solution

function digitize(n) {
    return n.toString().split('').map(n => +n).reverse();
}