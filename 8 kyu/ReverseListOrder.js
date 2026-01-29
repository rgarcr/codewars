// In this kata you will create a function that takes in a list and returns a list with the reverse order.

//My solution

function reverseList(list) {
    const reversedList = [];
    const lastIndex = list.length - 1;

    for (let i = lastIndex; i >= 0; i--)
        reversedList.push(list[i]);

    return reversedList;

}