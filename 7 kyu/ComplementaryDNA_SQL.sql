-- In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
-- More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
-- Example: (input --> output)
-- "ATTGC" --> "TAACG"
-- "GTAT" --> "CATA"
/ / My solution
/*
Write your SQL statement here:
You are given a table 'dnastrand' with column 'dna',
Return a table with column 'dna' and your result in a column named 'res'.
Sort the result table by 'dna' in alphabetical order
*/
SELECT
    dna,
    TRANSLATE(dna, 'ATCG', 'TAGC') AS res
FROM
    dnastrand
ORDER BY
    dna