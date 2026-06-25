// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

//My solution
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, c) => a + c, yourPoints) / (classPoints.length + 1)
}