-- Write a simple query to display student information of all active students.

-- TABLE STRUCTURE:

-- students
-- id (integer)	firstname (text)	lastname (text)	isactive (boolean)

--My solution

SELECT * FROM students
WHERE isactive is true