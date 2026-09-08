-- Each row of the table fighters records, alongside the fighter's name, whether they won (1) or lost (0), as well as the type of move that ended the bout.

-- table fighters

-- id
-- name
-- won
-- lost
-- move_id (Foreign Key for winning_moves.id)
-- table winning_moves

-- id
-- move
-- However, due to new health and safety regulations, all ki blasts have been outlawed as a potential fire hazard. Any bout that ended with Hadoken, Shouoken or Kikoken should not be counted in the total wins and losses.

-- So, your job:

-- Return name, won, and lost columns displaying the name, total number of wins and total number of losses. Group by the fighter's name.
-- Do not count any wins or losses where the winning move was Hadoken, Shouoken or Kikoken.
-- Order from most-wins to least
-- Return the top 6. Don't worry about ties.

--My solution

SELECT 
  name, 
  SUM(won) AS won,
  SUM(lost) AS lost
FROM fighters 
JOIN winning_moves ON fighters.move_id = winning_moves.id
WHERE MOVE NOT IN ('Hadoken', 'Shouoken', 'Kikoken')
GROUP BY name
ORDER BY won DESC
LIMIT 6