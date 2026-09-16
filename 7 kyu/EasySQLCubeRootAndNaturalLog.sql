-- Given the following table 'decimals':

-- ** decimals table schema **

-- id
-- number1
-- number2
-- Return a table with two columns (cuberoot, logarithm) 
--  where the values in cuberoot are the cube root of those provided in number1 and the values in 
--  logarithm are changed to the natural logarithm of those in number2.

-- my solution
SELECT CBRT(number1)::FLOAT AS cuberoot, LN(number2)::FLOAT AS logarithm FROM decimals
