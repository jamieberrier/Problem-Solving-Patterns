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