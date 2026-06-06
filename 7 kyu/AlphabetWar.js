// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims. Sum up each side's letters' power values to determine which side wins.

//My solution
function alphabetWar(fight) {
    const lObj = {
        w: 4,
        p: 3,
        b: 2,
        s: 1,
        sum: 0
    }

    const rObj = {
        m: 4,
        q: 3,
        d: 2,
        z: 1,
        sum: 0
    }

    for (let i = 0; i < fight.length; i++) {
        const letter = fight[i]
        if (lObj[letter])
            lObj.sum += lObj[letter]
        else if (rObj[letter])
            rObj.sum += rObj[letter]

    }

    if (lObj.sum > rObj.sum)
        return 'Left side wins!'
    else if (rObj.sum > lObj.sum)
        return 'Right side wins!'
    else
        return "Let's fight again!";
}