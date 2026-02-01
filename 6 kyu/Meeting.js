// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

//My solution

function meeting(s) {
    const persons = [];
    const arrS = s.split(';');

    for (const fullName of arrS) {
        const [first, last] = fullName.split(':');
        persons.push({
            fName: first,
            lName: last
        })
    }

    persons.sort((personA, personB) => {
        const nameA = personA.lName.toUpperCase();
        const nameB = personB.lName.toUpperCase();

        if (nameA < nameB) return -1
        if (nameA > nameB) return 1

        if (nameA == nameB) {
            const fNameA = personA.fName.toUpperCase();
            const fNameB = personB.fName.toUpperCase();

            if (fNameA < fNameB) return -1
            if (fNameA > fNameB) return 1
            return 0;
        }
    })

    return persons.reduce((a, c) => {
        a += `(${c.lName.toUpperCase()}, ${c.fName.toUpperCase()})`;
        return a;
    }, ``)
}