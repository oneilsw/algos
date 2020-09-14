// SUBARRAY

const maxSubArray = (nums) => {
    
  let sum = nums[0]    
  for(let i = 0; i < nums.length; i++){
      let currentSum = nums[i]
      if(currentSum > sum) {
          sum = currentSum       
      }
      for(let j = i+1; j < nums.length; j++){
          currentSum += nums[j]
          if(currentSum > sum) {
              sum = currentSum       
          }
      }
  }
  return sum
};

// Kadane

const maxSubArray = (nums) => {
  let current = nums[0]
  let max = nums[0]
  for(let i = 1; i < nums.length; i++){
      current = Math.max(current + nums[i], nums[i])
      max = Math.max(current, max)
  }
  return max
}

//3Sum  (Having trouble with unique arrays)
const threeSum = (nums) => {
    let storage = []
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1;j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k ++){
                if(nums[i] + nums[j] + nums[k] == 0){
                  storage.push(([nums[i], nums[j], nums[k]]).sort((a, b) => a - b))
                }
            }
        }
    }
  let unique = [...new Set(storage)]
  return unique
};