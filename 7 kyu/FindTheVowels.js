// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

//My solution
function vowelIndices(word) {
    let arr = [];
    for (let i = 0; i < word.length; i++) {
        //use test /[aeiou]/gi
        if (/[aeiouy]/gi.test(word[i]))
            //add position to array
            arr.push(i + 1);
    }
    return arr;
}