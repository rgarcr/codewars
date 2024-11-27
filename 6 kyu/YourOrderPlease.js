// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words) {
    let arr = words.split(" ");
    return arr.sort((a, b) => {
        let aNum = a.split("").filter(character => Number(character));
        let bNum = b.split("").filter(character => Number(character));
        return aNum[0] - bNum[0];
    }).join(" ");

}