function maxSubarraySum(arr, subLength){
	if (arr.length < subLength) return null

	//maximum sum
	let maxSum = 0
	
  let tempSum = 0

	// sum together the 1st subLength values of array
	for (let i = 0; i < num; i++) {
    maxSum += arr[i];
	}
	// set tempSum to maxSum
	tempSum = maxSum

	for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
	}
	
  return maxSum;
}

maxSubarraySum([100,200,300,400], 2) // 700