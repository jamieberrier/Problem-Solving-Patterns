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
	if(list.length < n) return null

    let maxSum = 0

    for(let i = 0; i < n; i++) {
        maxSum += list[i]
    }

    let p1 = 0
    let p2 = n
    let tempSum = maxSum
    
    while(p2 < list.length) {
        tempSum = tempSum - list[p1] + list[p2]
        
        if(tempSum > maxSum) maxSum = tempSum

        p1++
        p2++
    }

    return maxSum
}