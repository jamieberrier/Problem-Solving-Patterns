// accepts a SORTED array and a value
// returns the index of that value in the array
// if value is not in the array, returns -1

// binarySearch([1,2,3,4,5],2) -> 1

var search = function(nums, target) {
  let start = 0
  let end = nums.length - 1

  while(start <= end) {
    let mid = Math.floor((start + end) / 2)

    if(nums[mid] === target) {
      return mid
    } else if(nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
};

function binarySearch(nums, target){
  // start pointer
  let start = 0
  // end pointer
  let end = nums.length - 1
  // mid pointer
  let mid
  
  while(start <= end) {
    // set new mid pointer
    mid = Math.floor((start + end) / 2)

    if(nums[mid] > target) { // target less than middle
      end = mid - 1
    } else if(nums[mid] < target) { // target greater than middle
      start = mid + 1
    } else { // target equals middle
      return mid
    }
  }
  
  return -1
}

function binarySearch(arr, num){
  // set start pointer
  let start = 0
  // set end pointer
  let end = arr.length - 1
  // set mid pointer
  let mid
  
  while(start <= end) {
    // set new mid pointer
    mid = Math.floor((start + end) / 2)
    if(arr[mid] === num) return mid
    if(arr[mid] > num) end = mid - 1
    if(arr[mid] < num) start = mid + 1
  }
  
  return -1
}

function binarySearch(arr, num){
  let left = 0
  let right = arr.length - 1
  let mid = Math.floor((left + right) / 2)

  // while left is smaller than or equal to right AND num not found
  while(left <= right && arr[mid] !== num) {
    // if value too large, move right pointer
    if(arr[mid] > num) right = --mid
    // if value too small, move left pointer
    if(arr[mid] < num) left = ++mid
    // set new middle index
    mid = Math.floor((left + right) / 2)
  }
  // if value matches, return index, else return -1
  return arr[mid] === num ? mid : -1
}

// Original Solution
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]){
          end = middle - 1;
      } else {
          start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
  }
  if(arr[middle] === elem){
      return middle;
  }
  return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)