// We want to generate a function that computes the series starting from 0 and ending until the given number.

//My solution
var SequenceSum = (function () {
    function SequenceSum() { }

    SequenceSum.showSequence = function (count) {
        if (count == 0) return `${count}=0`
        if (count < 0) return `${count}<0`
        let sumStr = '0'
        let sumNum = 0;
        for (let i = 1; i <= count; i++) {
            sumStr += `+${i}`;
            sumNum += i;
        }
        return sumStr += ` = ${sumNum}`
    };

    return SequenceSum;

})();