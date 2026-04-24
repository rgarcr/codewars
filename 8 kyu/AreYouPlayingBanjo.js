// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

//My solution
function areYouPlayingBanjo(name) {
    return name.toLowerCase()[0] !== "r"
        ? `${name} does not play banjo`
        : `${name} plays banjo`
}ß