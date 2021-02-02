// Pattern: Two Pointers

// Write a function, averagePair
// Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array
// where the average of the pairs equals the target average.
// There may be more than 1 pair that matches the average target

// Bonus Constraints:
// Time: O(n)
// Space: O(1)

// averagePair([1,2,3], 2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19], 8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(arr, target){
  // if arr is empty, return false
  if (arr.length === 0) return false

  // define slow pointer
  let i = 0

  // loop thru arr
    // check if average of values at pointers === target
      // if match, return true
      // else
      // 
}