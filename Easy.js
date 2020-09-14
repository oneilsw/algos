// TWO SUM
const twoSum = (nums, target) => {
  let storage = {}
  for(let [index, num] of nums.entries()){
      if(storage[num] !== undefined) return [storage[num], index]
      storage[target-num] = index
  }
}

const twoSum = (nums, target) => {
  for(let i = 0; i < nums.length; i++)
      {
        for(let j = i+1; j < nums.length; j++){
            if(nums[i]+nums[j]==target){
                return [i, j]
            }
        }
      }   
};

// IS ANAGRAM
const isAnagram = (s, t) => {
  if(s.length != t.length){
    return false
  }
  let arrayS = s.split("").sort().join()
  let arrayT = t.split("").sort().join()
  if(arrayS === arrayT){
    return true
  } else return false
};

// CONTAINS DUPLICATE
const containsDuplicate = (nums) => {
  for(let i=0; i<nums.length; i++){
      for(let j=i+1; j<nums.length; j++){
          if(nums[i]===nums[j]){
              return true
          }
      }
  }
  return false
};

// REVERSE INT
const reverse = (x) => {
    if(x < 0) return -1 * reverse(-x)
    let solution = (x+"").split('').reverse().join('')
    return (solution > 2**31 -1) ? 0 : solution
};

// PALIDROME NUMBER 
const isPalindrome = (x) => {
  if((x % 10 == 0 && x !== 0) || x < 0) return false
  else{
     let revertedNum = 0
     while(x>revertedNum){
         revertedNum = revertedNum * 10 + x % 10
         x /= 10
     }
      return x == revertedNum || x == revertedNum/10
  }
};

// FIBONACCI

function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

// FIBONACCI (RECURSION)
function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

//  FIBONACCI (MEMOIZATION)

function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

