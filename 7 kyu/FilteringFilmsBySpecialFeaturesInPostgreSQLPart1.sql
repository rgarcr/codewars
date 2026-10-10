-- Write a PostgreSQL query that selects film_id, the title and special_features columns from the film table in the DVD rental database, and returns only the films that have both "Trailers" and "Deleted Scenes" as their special feature. special_features is the text[] type. It represents a one-dimensional array of values, where each value is of the text data type.

-- Notes:
-- for the sample tests, static dump of DVD Rental Sample Database is used, for the final solution - random tests.
-- Note that this query should return films that have other special features in addition to "Trailers" and "Deleted Scenes".
-- The result should be order by title alphabetically, if title is the same - then by film_id in asc order.

--My solution

SELECT film_id, title, special_features FROM film
  WHERE 
    EXISTS (SELECT * FROM UNNEST(special_features) AS sp WHERE sp IN('Trailers')) AND 
    EXISTS (SELECT * FROM UNNEST(special_features) AS sp WHERE sp IN('Deleted Scenes'))
ORDER BY title, film_id