-- For this challenge you need to create a simple SELECT statement that will return all columns from the people table, and join to the toys table so that you can return the COUNT of the toys

-- people table schema
-- id
-- name
-- toys table schema
-- id
-- name
-- people_id

--My solution

SELECT p.id, p.name, COUNT(t.id) AS toy_count FROM people p 
JOIN toys t on p.id = t.people_id
GROUP BY p.id