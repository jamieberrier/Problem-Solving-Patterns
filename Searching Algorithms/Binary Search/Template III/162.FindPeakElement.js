/*
A peak element is an element that is strictly greater than its neighbors.
Given an integer array nums, find a peak element, and return its index. 
If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:
  Input: nums = [1,2,3,1]
  Output: 2
  Explanation: 3 is a peak element and your function should return the index number 2.

Example 2:
  Input: nums = [1,2,1,3,5,6,4]
  Output: 5
  Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
  
Constraints:
  1 <= nums.length <= 1000
  -231 <= nums[i] <= 231 - 1
  nums[i] != nums[i + 1] for all valid i.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
   if(nums.length === 1) return 0
    
   let left = 0
   let right = nums.length - 1

   while(left < right) {
    let mid = Math.floor((left + right) / 2)

    // if middle element is greater than its immediate right neighbor
    if(nums[mid] > nums[mid + 1]) {
      // 
      right = mid
    } else {
      // if middle element is less than its immediate right neighbor
      // 
      left = mid + 1
    }
   }
   // 
   return left
};

var findPeakElement = function(nums) {
  // if only 1 element, return its index
  if(nums.length === 1) return 0

  // Initial Condition
  let left = 0
  let right = nums.length - 1

  // Termination: left + 1 === right
  while(left + 1 < right) {
    // index of middle element
    let mid = Math.floor((left + right) / 2)

    // if middle element is less than its immediate right neighbor
    if(nums[mid] < nums[mid + 1]) {
      // search right
      left = mid
    } else {
      // middle element is greater than its immediate right neighbor
      // search left
      right = mid
    }
  }
  // Post-processing:
  // End Condition: left + 1 === right
  // if left element is greater than right element, return index of left element
  if(nums[left] > nums[right]) return left
  // if left element is less than right element, return index of right element
  if(nums[left] < nums[right]) return right
 };