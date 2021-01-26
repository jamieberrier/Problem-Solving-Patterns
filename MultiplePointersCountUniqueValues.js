// Implement a function called countUniqueValues, which accepts a SORTED array
// and counts the unique values in the array. There can be negative numbers but it will always be sorted.

// start a pointer at index 0 and index 1 and see if equal
// if equal, move j 1
// if not equal, move i 1 and reassign value at i's new index to value at j's index

function countUniqueValues(arr){
  if(arr.length === 0) return 0
  if(arr.length === 1) return 1
  
  let i = 0
  let j = 1

  while(j <= arr.length - 1) {
    if(arr[i] === arr[j]) {
      j++
    } else {
      arr[++i] = arr[j++]
    }
  }
  
  return i + 1
}