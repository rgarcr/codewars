-- Remove First and Last Character
-- Task
-- Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.
-- Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.
/ / My solution
SELECT
    s,
    CASE
        WHEN LENGTH (s) < 3 THEN ''
        ELSE SUBSTRING(s, 2, LENGTH (s) - 2)
    END AS res
FROM
    removechar