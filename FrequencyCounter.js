// uses objects or sets to collect values/frequencies of values
// can avoid the need for nested loops and or O(n^2) operations with arrays and strings

// break down arrays/strings into objects and then compare the objects
// use objects to construct profiles/break down contents of arrays or strings, and then quickly compare the breakdowns
// e.g. compare for same pieces, numbers consist of same digits

// write a function called same, which accepts 2 arrays.
// the function should return true if every value in the 1st array has it's corresponding value squared in the 2nd array.
// the frequency of values must be the same
// same([1,2,3,2,5], [9,1,4,4,11]) => false
// same([1,2,3,2], [9,1,4,4]) => true

function same(arr1, arr2){
  // if arrays are not the same length, return false
  if(arr1.length !== arr2.length){
    return false
  }
  // object for arr1
  let frequencyCounter1 = {}
  // object for arr2
  let frequencyCounter2 = {}
  // loop over every value in arr1, add 1 or initialize to 1
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  // loop over every value in arr2, add 1 or initialize to 1
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
  }

  // loop over every key in frequencyCounter1
  for(let key in frequencyCounter1){
    // is key**2 a key in frequencyCounter2?
    // if not, return false
    if(!(key ** 2 in frequencyCounter2)){
      return false
    }
    // do the values match?
    // if not, return false
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  // if made it thru loop, return true
  return true
}