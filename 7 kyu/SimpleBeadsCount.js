// wo red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement a function returning the number of red beads.
// If there are less than 2 blue beads return 0.

//My solution
function countRedBeads(n) {
    if (n < 2) return 0
    let red = 2
    for (let i = 2; i < n; i++) {
        red += 2
    }
    return red
}