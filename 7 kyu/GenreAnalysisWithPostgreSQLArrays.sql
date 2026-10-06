-- We have a table named books with the following schema:

-- id (integer) - The unique identifier for each book entry.
-- title (varchar) - The title of the book.
-- author (varchar) - The author of the book.
-- genres (varchar[]) - An array of genres associated with the book.
-- Write a SQL query to achieve the following:

-- Return a list of genres.
-- Count the number of books in each genre.
-- List titles of the books in each genre as an array. The titles within this array should be sorted alphabetically.
-- The output should be ordered by the number of books in each genre in descending order, and then alphabetically by genre name for genres with the same book count.

--My solution

SELECT 
  UNNEST(genres) AS genre , 
  COUNT(id) AS count, 
  ARRAY_AGG(title ORDER BY title ASC) AS books 
FROM books
GROUP BY genre
ORDER BY count DESC, genre