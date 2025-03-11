// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// My solution.

function isPangram(string) {
    //replace non-letters with nothing and set to lowercase
    let str = string.replace(/[\W\d]/g, "").toLowerCase();
    //create a set object to containe only one value of each character in str
    let set = new Set([...str]);
    //return if size equals all letters in alphabet
    return set.size === 26;

}