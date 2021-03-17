/*
Pseudocode: array of numbers
  1. Start looping, with a variable called i, from the end to the beginning of array 
  2. Start an inner loop, with a variable called j, from the beginning until i - 1
  3. if array[j] > array[j + 1], swap the 2 values
  4. return sorted array

  Helper method, swap (ES6/2015)

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
*/

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function bubbleSort(arr) {

  for(let i = arr.length - 1; i > 0; i--) {
    for(let j = 0; j <= i - 1; j++) {
      // if(arr[j] > arr[j + 1]) swap(arr, j, j + 1)
      if(arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }
  return arr
}