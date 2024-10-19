// Complete the function which converts hex number (given as a string) to a decimal number.


//My Solution

function hexToDec(hexString) {
    /*
    Using hexadecimal to decimal formula,
  (5BC)16 = ( 5 × 162 + 11 × 161 + 12 × 160 )
  = 5 × 256 + 11 × 16 + 12× 1
  = (1468)10
    */
    //make object for a-f = 10-15
    let hexObj = {
        'a': 10,
        'b': 11,
        'c': 12,
        'd': 13,
        'e': 14,
        'f': 15
    }
    let decimal = 0;
    let decimalCount = 0;
    for (let i = hexString.length - 1; i >= 0; i--) {
        if (hexString[i] == '-') {
            decimal = -decimal;
            continue;
        }
        decimal += (+hexObj[hexString[i].toLowerCase()] || +hexString[i]) * Math.pow(16, decimalCount);
        decimalCount++;
    }
    return decimal;
}