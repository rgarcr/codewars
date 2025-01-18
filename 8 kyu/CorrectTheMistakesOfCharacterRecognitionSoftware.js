// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//My solution

function correct(string) {
    let newStr = string;
    if (newStr.includes("0"))
        newStr = newStr.replaceAll('0', 'O');

    if (newStr.includes("1"))
        newStr = newStr.replaceAll('1', 'I');

    if (newStr.includes("5"))
        newStr = newStr.replaceAll('5', 'S');

    return newStr;;
}