// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 

//My solution
function minSum(arr) {
    //sort and loop array
    //mutiply first and last elements
    //shorten array from front and end
    let sum = 0;
    arr.sort((a, b) => a - b)
    let end = arr.length - 1;
    for (let i = 0; i < arr.length / 2; i++) {
        sum += arr[i] * arr[end];
        end--;
    }
    return sum;
}