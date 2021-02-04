function maxSubarraySum(arr, subLength){
	if (arr.length < subLength) return null

	let maxSum = 0
  let tempSum = 0

	for (let i = 0; i < num; i++) {
    maxSum += arr[i];
	}
	
	tempSum = maxSum

	for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
	}
	
  return maxSum;
}

maxSubarraySum([100,200,300,400], 2) // 700