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

//3Sum
const threeSum = (nums) => {    
    let result = []
    if(nums.length < 3) return result
    nums = nums.sort((a, b) => a - b) 
   
    for(let i = 0; i < nums.length - 2; i++){
      if(nums[i] > 0) break
      if(i > 0 && nums[i] === nums[i-1]) continue
      let left = i + 1
      let right = nums.length - 1
      
      while(left<right){
        let sum = nums[i] + nums[left] + nums[right] 
        if(sum === 0){
          result.push([nums[i], nums[left], nums[right]])          
          while(nums[left] === nums[left+1]) left++
          while(nums[right] === nums[right-1]) right--
          left++
          right--
        } else if(sum<0) left++
        else right--
      }
    }
  return result
};
