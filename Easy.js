// TWO SUM
const twoSum = (nums, target) => {
  let storage = {}
  for(let [index, num] of nums.entries()){
      if(storage[num] !== undefined) return [storage[num], index]
      storage[target-num] = index
  }
}

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