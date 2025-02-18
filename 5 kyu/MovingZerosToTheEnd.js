// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//my solution

function moveZeros(arr) {
    let count = arr.reduce((acc, curr) => curr === 0 ? acc += 1 : acc, 0);
    let newArr = arr.filter(val => val !== 0);

    for (let i = 0; i < count; i++)
        newArr.push(0);

    return newArr;
}