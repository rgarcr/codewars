-- We have a PostgreSQL DB table interview_failures. This table contains information about various unfortunate reasons candidates failed their interviews:

-- candidate_name (varchar): name of the candidate
-- failure_reason (varchar): reason for the interview failure
-- interview_date (date): Date of the interview
-- You need to find the total number of interview failures grouped by the failure_reason in the interview_failures table without using the COUNT() function or relying on any auto-incrementing id column.

-- The result set should contain the following columns:

-- failure_reason (varchar): reason for the interview failure
-- cnt (int): count of the employees who failed because of that reason.
-- Order the results by cnt in descending order. If the count is the same for multiple reasons, order them alphabetically by the reason.

--My solution

SELECT failure_reason, ARRAY_LENGTH(ARRAY_AGG(candidate_name), 1) AS cnt FROM interview_failures
GROUP BY failure_reason
ORDER BY cnt DESC, failure_reason