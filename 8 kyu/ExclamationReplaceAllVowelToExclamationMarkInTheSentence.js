// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

//My solution
function replace(s) {
    return s.replaceAll(/[aeiou]/gi, '!');
}