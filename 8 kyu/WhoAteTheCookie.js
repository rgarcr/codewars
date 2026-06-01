// or this problem you must create a program that says who ate the last cookie.

// If the input is a string then "Zach" ate the cookie.

// If the input is a Number then "Monica" ate the cookie.

// If the input is anything else "the dog" ate the cookie.

// The way to return the statement is: "Who ate the last cookie? It was (name)!"

//My solution

function cookie(x) {
    let name = 'the dog';
    if (typeof (x) === 'string') { name = 'Zach'; }
    if (typeof (x) === 'number') { name = 'Monica'; }
    return `Who ate the last cookie? It was ${name}!`;
}