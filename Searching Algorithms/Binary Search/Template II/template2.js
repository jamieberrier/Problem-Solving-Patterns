function binarySearch(nums, target){
  if(nums === null || nums.length === 0) return -1

  let left = 0
  let right = nums.length

  while(left < right){
    let mid = Math.floor((left + right) / 2)

    if(nums[mid] === target) {
      return mid
    } else if(nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  // Post-processing
  // End Condition: left === right
  if(left !== nums.length && nums[left] === target) return left
  return -1
}