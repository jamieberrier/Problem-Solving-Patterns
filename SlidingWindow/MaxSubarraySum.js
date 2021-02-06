// Pattern: Sliding Window

// Given an array of integers and a  number, write a function called maxSubarraySum 
// which finds the maximum sum of a consecutive subarray with the length of the number passed to the function.

// Time Complexity: O(n)
// Space Complexity: O(1)

// Examples:
// maxSubarraySum([100,200,300,400],2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
// maxSubarraySum([-3,4,0,-2,6,-1],2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3],3) // null

function maxSubarraySum(arr, subLength){
	if (arr.length < subLength) return null

	// keeps track of the maximum sum
	let maxSum = 0
	
  let tempSum = 0

	// sum together the 1st subLength values of array
	for (let i = 0; i < subLength; i++) {
    maxSum += arr[i];
	}
	// set tempSum to maxSum
	tempSum = maxSum

	for (let i = subLength; i < arr.length; i++) {
		// subtract the 1st value from tempSum 
		// and add the next value to tempSum
		// assign new tempSum to tempSum
		tempSum = tempSum - arr[i - subLength] + arr[i];
		// update maxSum with greater value
    maxSum = Math.max(maxSum, tempSum);
	}
	// return greatest sum
  return maxSum;
}

maxSubarraySum([100,200,300,400], 2) // 700

// alternative solution
function maxSubarraySum(list, n){
	// if list length is less than n, return null
	if(list.length < n) return null

	// return value
	let maxSum = 0

	// get baseline
	// sum first n values & assign to maxSum
    for(let i = 0; i < n; i++) {
        maxSum += list[i]
    }

	// trailing window edge
	let p1 = 0
	// leading window edge
	let p2 = n
	// to compare new sum to previous maxSum
	let tempSum = maxSum
	
    // continue until edge of window (p2) reaches end of list
    while(p2 < list.length) {
		// calc new sum including p2 and excluding p1
        tempSum = tempSum - list[p1] + list[p2]
        // update maxSum if tempSum is greater
        if(tempSum > maxSum) maxSum = tempSum
		// slide window
        p1++
        p2++
    }
	// return the max sum found
    return maxSum
}