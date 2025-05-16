// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

//My solution
function towerBuilder(rows) {
    if (rows.length === 1) return ["*"];

    let str = "*";
    let rowSize = rows - 1 + rows;
    let arr = []
    let counter = 1;
    let spaceSize = Math.floor(rowSize / 2)

    for (let i = 0; i < rows; i++) {
        if (i === 0) {
            arr.push(" ".repeat(spaceSize) + str + " ".repeat(spaceSize))
        }
        else {
            --spaceSize;
            counter += 2;
            let ast = str.repeat(counter)
            if (ast.length === rowSize) {
                arr.push(ast);
                break;
            }
            arr.push(" ".repeat(spaceSize) + ast + " ".repeat(spaceSize))
        }
    }
    return arr

}