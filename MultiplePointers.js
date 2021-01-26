// write a function called sumZero which accepys a sorted array of integers.
// the function should find the 1st pair where the sum is 0.
//return an array that includes both values that sum to 0 or undefined if a pair does not exist.

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