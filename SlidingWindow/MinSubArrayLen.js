// Pattern: Sliding Window

// Write a function called minSubArrayLen which accepts two parameters - 
// an array of positive integers and a positive interger.
// Should return the minimal length of a contiguous subarray of which
// the sum >= the intger passed in. If there isn't one, return 0.

// Time Complexity: O(n)
// Space Complexity: O(1)

// Examples:
// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> [4,3]
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> [5,4]
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> [62]
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) // 5
// minSubArrayLen([4,3,3,8,1,2,3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) // 0

function minSubArrayLen(arr, num) {
  // to check sum of values against num
  let sum = 0
  // to track window's leading edge
  let right = 0
  // to track window's trailing edge
  let left = 0
  // to track smallest subarray length
  let minLen = Infinity

  // while window's trailing edge is less than array length
  while (left < arr.length) {
    // if window's leading edge has NOT reached the end of the array
    // AND current window's values do NOT add up to num, grow window to right 
    if(right < arr.length && sum < num) {
      // increase sum by the value at window's leading edge
      sum += arr[right]
      // increment window's leading edge to grow window
      right++
    } else if(sum >= num){
      // if current window's values DO add up to AT LEAST num, shrink window from left
      // update smallest subarray length to the lesser of current minLen or current window's length
      minLen = Math.min(minLen, right - left)
      // decrease sum by the value at window's trailing edge
      sum -= arr[left]
      // increment window's trailing edge to shrink window
      left++
    } else {
      // if current sum is less than num, BUT window's leading edge HAS reached end of array
      // needed to prevent an infinite loop 
      break
    }
  }
  // return either smallest subarray length found or 0
  // if minLen is never updated, then there is NOT a sum >= num, so return 0
  return minLen === Infinity ? 0 : minLen
}