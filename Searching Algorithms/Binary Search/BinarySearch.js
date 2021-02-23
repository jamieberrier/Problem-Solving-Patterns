// accepts a SORTED array and a value
// returns the index of that value in the array
// if value is not in the array, returns -1

// binarySearch([1,2,3,4,5],2) -> 1

function binarySearch(arr, num){
  let left = 0
  let right = arr.length -1
  let mid

  while(left <= right) {
    // create middle index
    mid = Math.floor((left + right) / 2)
    // if value matches, return index
    if(arr[mid] === num) return mid
    // if value too large, move right pointer
    if(arr[mid] > num) right = mid - 1
    // if value too small, move left pointer
    if(arr[mid] < num) left = mid + 1
  }

  return -1
}