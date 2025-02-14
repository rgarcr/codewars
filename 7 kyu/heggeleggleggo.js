// Egg Talk.

// Insert an egg after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.

// Example
// hello => heggeleggleggo

// eggs => egegggeggsegg

// FUN KATA => FeggUNegg KeggATeggA

//My solution
function heggeleggleggo(word) {
    let str = "";
    for (let i = 0; i < word.length; i++) {
        if (/[AEIOUaeiou\s]/.test(word[i]))
            str += word[i];
        else str += word[i] + "egg";

    }
    return str;
}