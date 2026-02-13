// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0
// Note: Zero should be left as it is.

//My Solution

function noBoringZeros(n) {
  let index;
  let str= n.toString();
  
  for(let i = str.length-1; i > 0; i--){   
    if(Number(str[i]) > 0)
      return n
    
    if(str[i-1] != '0'){
      index=i;
      break;
      }
  }
  return Number(str.slice(0, index))
}