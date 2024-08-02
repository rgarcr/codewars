/*
  Finish the solution so that it sorts the passed in array of numbers. 
  If the function passes in an empty array or null/nil value then it should return an empty array.

  solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
  solution(null); // should return []
*/

//My Solution
//check if null and not an empty array, then sort
//else return empty array
function solution(nums) {
    return nums != null && nums.length ? nums.sort((a, b) => a - b) : []
}