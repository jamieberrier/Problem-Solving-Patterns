function binarySearch(nums, target){
  if(nums === null || nums.length === 0) return -1

  // Initial Condition
  let left = 0
  let right = nums.length - 1

  // Termination: left + 1 === right
  while(left + 1 < right) {
    // index of middle element
    let mid = Math.floor((left + right) / 2)

    // if middle element equals target
    if(nums[mid] === target) {
       // return index of middle element
      return mid
    } else if(nums[mid] < target) {
      // if middle element is less than target
      // search right
      left = mid
    } else {
      // middle element is greater than target
      // search left
      right = mid
    }
  }

  // Post-processing:
  // End Condition: left + 1 === right
  // if left element equals target, return index of left element
  if(nums[left] === target) return left
  // if right element equals target, return index of right element
  if(nums[right] === target) return right
  // if an element equal to target not found, return -1
  return -1
}