// write a function called sumZero which accepys a SORTED array of integers.
// the function should find the FIRST pair where the sum is 0.
//return an array that includes both values that sum to 0 or undefined if a pair does not exist.

// naive solution
// time O(n^2)
// space O(1)
function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4,-3,-2,-1,0,1,2,5])

// refactored with pointers
function sumZero(arr) {
  let left = 0
  let right = arr.length - 1

  while(left < right) {
    let sum = arr[left] + arr[right]

    if(sum === 0) {
      return [arr[left], arr[right]]
    } else if(sum > 0){
      right--
    } else {
      left++
    }
  }
}