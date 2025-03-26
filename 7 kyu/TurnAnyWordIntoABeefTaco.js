// We want to input a word as a string, and return a list representing that word as a taco.

// Key

// all vowels (except 'y') = beef

// t = tomato

// l = lettuce

// c = cheese

// g = guacamole

// s = salsa

// NOTE
// We do not care about case here. 'S' is therefore equivalent to 's' in our taco.

// Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.

// Note that no matter what ingredients are passed, our taco will always have a shell.

//My solution

function tacofy(word) {
    let arr = ['shell'];
    let str = word.replace(/[aeiou]/gi, 'a');

    for (let i = 0; i < str.length; i++) {
        let letter = str[i].toLowerCase();
        switch (letter) {
            case 'a':
                arr.push("beef");
                break;
            case 't':
                arr.push("tomato");
                break;
            case 'l':
                arr.push("lettuce");
                break;
            case 'c':
                arr.push('cheese');
                break;
            case 'g':
                arr.push('guacamole');
                break;
            case 's':
                arr.push('salsa');
                break;
        }
    }

    arr.push('shell');
    return arr;
}