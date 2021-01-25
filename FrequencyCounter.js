// break down arrays/strings into objects and then compare the objects
function same(arr1, arr2){
  // if arrays are not the same length, return false
  if(arr1.length !== arr2.length){
    return false
  }
  // object for arr1
  let frequencyCounter1 = {}
  // object for arr2
  let frequencyCounter2 = {}
  // loop over arr1
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  // loop over arr2
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
  }

  for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false
    }

    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  return true
}

// same([1,2,3,2,5], [9,1,4,4,11]) => false
// same([1,2,3,2], [9,1,4,4]) => true