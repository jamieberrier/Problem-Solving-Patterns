/*
Given a sorted integer array arr, two integers k and x, 
return the k closest integers to x in the array. 
The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:
  |a - x| < |b - x|, or
  |a - x| == |b - x| and a < b
 

Example 1:
  Input: arr = [1,2,3,4,5], k = 4, x = 3
  Output: [1,2,3,4]

Example 2:
  Input: arr = [1,2,3,4,5], k = 4, x = -1
  Output: [1,2,3,4]
 

Constraints:
  1 <= k <= arr.length
  1 <= arr.length <= 104
  arr is sorted in ascending order.
  -104 <= arr[i], x <= 104
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let mid = Math.floor((left + right) / 2)

    if(x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return arr.slice(left, left + k)
};

/*

Approach 2: Binary Search and Two Pointers
Algorithm

The original array has been sorted so we can take this advantage by the following steps.

1. If the target x is less or equal than the first element in the sorted array, 
  the first k elements are the result.
2. Similarly, if the target x is more or equal than the last element in the sorted array, 
  the last k elements are the result.
3. Otherwise, we can use binary search to find the index of the element, which is equal (when this list has x) 
  or a little bit larger than x (when this list does not have it). 
  Then set low to its left k-1 position, and high to the right k-1 position of this index as a start. 
  The desired k numbers must in this rang [index-k-1, index+k-1]. 

  So we can shrink this range to get the result using the following rules.
  * If low reaches the lowest index 0 or the low element is closer to x than the high element, 
    decrease the high index.
  * If high reaches to the highest index arr.size()-1 or it is nearer to x than the low element, 
    increase the low index.
  * The looping ends when there are exactly k elements in [low, high], 
    the subList of which is the result.

*/

var findClosestElements = function(arr, k, x) {
  if(x <= arr[0]) return arr.slice(0, k)

  if(x >= arr[arr.length - 1]) return arr.slice(-k)
}