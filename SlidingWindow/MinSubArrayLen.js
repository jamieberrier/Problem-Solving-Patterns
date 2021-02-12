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

function minSubArrayLen(arr, sum) {
  // check sum of values against num
  let total = 0
  let start = 0
  let end = 0
  let minLen = Infinity

  while (start < arr.length) {
    // if current window doesn't add up to the given sum then 
    // grow the window to right
    if(total < sum && end < arr.length) {
      total += arr[end]
      end++
    } else if(total >= sum){
      // if current window adds up to at least the sum given then
      // shrink the window from the left
      minLen = Math.min(minLen, end - start)
      total -= arr[start]
      start++
    } else {
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      break
    }
  }

  return minLen === Infinity ? 0 : minLen
}