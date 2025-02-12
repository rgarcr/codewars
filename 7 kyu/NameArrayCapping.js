// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

//My solution

function capMe(names) {
    return names.map(ch => ch[0].toUpperCase() + ch.slice(1).toLowerCase());
}