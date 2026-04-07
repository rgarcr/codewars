// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

//My solution
function enough(cap, on, wait) {
    let seatsLeft = cap - on - wait;
    return seatsLeft < 0 ? Math.abs(seatsLeft) : 0;
}ß