// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

//My solution

var isAnagram = function (test, original) {
    //test length
    if (test.length != original.length) return false;

    //create object to keep count of all letters
    let testObj = {};
    for (let i = 0; i < test.length; i++) {
        let letter = test[i].toLowerCase();
        testObj[letter] ? testObj[letter]++ : testObj[letter] = 1;
    }

    let originalObj = {};
    for (let i = 0; i < original.length; i++) {
        let letter = original[i].toLowerCase();
        originalObj[letter] ? originalObj[letter]++ : originalObj[letter] = 1;
    }

    //compare obj keys and count
    for (let key in testObj) {
        if (originalObj[key] !== testObj[key])
            return false;
    }
    return true;
};