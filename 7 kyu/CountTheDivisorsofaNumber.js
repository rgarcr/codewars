// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.

//My solution

function getDivisorsCnt(n){
      let count = 0;
      if(n % Math.sqrt(n) === 0)
        count++;
        
        for(let i = 0; i < Math.sqrt(n); i++)
          if(n % i == 0)
            count+=2;
      
      return count;
    }