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
