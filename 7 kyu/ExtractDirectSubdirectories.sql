-- Given a table containing directory paths, write a SQL query to extract all direct subdirectories of a specified base directory. The results should be in alphabetical order.
-- We have directories table
-- id (integer): primary key
-- path (varchar): column containing directory paths.
-- Task Requirements:
-- Your query should extract direct subdirectories of the base path /home/user/pictures/.
-- The result should not contain the full path, but only the direct subdirectory name.
-- The result should not have duplicates.
-- The result should be sorted in alphabetical order.
-- The result should contain single subdirectory column
--My solution
SELECT DISTINCT
    SPLIT_PART (SUBSTRING(path, LENGTH ('/home/user/pictures/') + 1), '/', 1) as subdirectory
FROM directories
WHERE
    path like '/home/user/pictures/%'
    AND SUBSTRING(path, LENGTH ('/home/user/pictures/') + 1) != ''
ORDER BY
    subdirectory ASC