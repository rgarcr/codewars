-- Let's consider a case where we have a students table and a courses table. The tables have the following structure:
-- students:
-- | id  | name     | email               |
-- |-----|----------|---------------------|
-- | 1   | John     | john@example.com    |
-- | 2   | Sarah    | sarah@example.com   |
-- | 3   | Robert   | robert@example.com  |
-- ...
-- courses:
-- | id  | student_id | course_name | score |
-- |-----|------------|-------------|-------|
-- | 1   | 1          | Math        | 90    |
-- | 2   | 1          | Science     | 85    |
-- | 3   | 2          | Math        | 92    |
-- | 4   | 2          | Science     | 80    |
-- ...
-- We need to find the students who have a higher score in Science than in Math.
-- Your SQL query should return the student_id, name (the name of the student), and his or her difference in scores between these courses (named as score_difference).
-- Order the result by the difference in scores in descending order, and if diffrence is the same, then by student_id in ascending order.
--My solution
SELECT
    s.id AS student_id,
    s.name,
    c_sci.score - c_Math.score AS score_difference
FROM
    students s
    JOIN courses c_sci ON s.id = c_sci.student_id
    AND c_sci.course_name = 'Science'
    JOIN courses c_Math ON s.id = c_Math.student_id
    AND c_Math.course_name = 'Math'
WHERE
    c_sci.score > c_Math.score
ORDER BY
    score_difference DESC,
    student_id ASC