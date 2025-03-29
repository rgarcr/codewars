// You are given two strings (st1, st2) as inputs. Your task is to return a string containing the numbers in st2 which are not in str1. Make sure the numbers are returned in ascending order. All inputs will be a string of numbers.

//My solution

function findAdded(st1, st2) {
    let str = st2;
    for (let i = 0; i < st1.length; i++)
        str = str.replace(st1[i], "");

    return str.split("").sort().join("");
}