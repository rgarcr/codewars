// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    //store index of add values in array
    let indexArr = [];
    array.forEach((elem, i) => {
        if (elem % 2 != 0)
            indexArr.push(i);
    })

    //filter only odd numbers and sort.
    let arrOdd = array.filter(elem => elem % 2 != 0).sort((a, b) => a - b);

    //pair index and odd numbers from both arrays in an object
    let obj = indexArr.reduce((acc, curr, i) => {
        acc[curr] = arrOdd[i];
        return acc;
    }, {})

    //replace index of odd nubers sorted without moving even values
    return array.map((elem, i) => {
        return i in obj ? obj[i] : elem;
    });

}