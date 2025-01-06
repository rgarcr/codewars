// Find the anonymous function in the given array and use the function to filter the array
// Input
// Your input. First Parameter will be an array with an anonymous function somewhere in the lot, The second Parameter will be an array which you will filter using the anonymous function you find.
// Output
// Your output. Output a filtered version of the second parameter using the function found in the first parameter.
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//My solution
var FindFunction = function (func, arr) {
    let f = null;
    
    //find function
    for (let i = 0; i < func.length; i++) {
        if (func[i] instanceof Function) {
            f = func[i];
            break;
        }
    }

    //run filter with function and return 
    return arr.filter(f)
}