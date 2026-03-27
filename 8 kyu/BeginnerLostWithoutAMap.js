// Given an array of integers, return a new array with each value doubled.

//My solution

function maps(arr){
  let arrDoubled = []
  for(let i = 0; i < arr.length; i++)
    arrDoubled.push(arr[i]+arr[i])
  return arrDoubled;
}