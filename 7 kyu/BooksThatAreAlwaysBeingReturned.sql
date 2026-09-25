-- The library management system uses two main tables - books and loans. The books table contains details about the books, while the loans table contains details about the loans.

-- books:

-- book_id (integer) - The unique identifier for a book
-- title (string) - The title of the book
-- author (string) - The author of the book
-- loans:

-- loan_id (integer) - The unique identifier for a loan
-- book_id (integer) - The identifier for the book that was loaned, corresponds to book_id in the books table
-- borrower_name (string) - The name of the person who borrowed the book
-- return_date (date) - The date when the book was returned. If the book has not yet been returned, this field is null.
-- Your task is to write a SQL query to find which books have always been returned every time they have been loaned out.

-- In the result set you need to return the book_id and title of books, for all books that have been loaned at least once and aren't currently on-loan (meaning that they do not have records with return_date == null). The result should be ordered by book_id in descending order.

--My solution


SELECT  b.book_id, b.title FROM books b
INNER JOIN loans l ON l.book_id = b.book_id
GROUP BY b.book_id, b.title
HAVING COUNT(CASE WHEN l.return_date IS NULL THEN 1 END) = 0
ORDER BY book_id DESC