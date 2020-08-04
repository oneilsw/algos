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
