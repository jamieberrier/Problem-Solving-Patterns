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
  // 1. Start looping, with a variable called i, from the end to the beginning of array
  for(let i = arr.length - 1; i > 0; i--) {
    // 2. Start an inner loop, with a variable called j, from the beginning until i - 1
    for(let j = 0; j <= i - 1; j++) {
      // 3. if array[j] > array[j + 1], swap the 2 values
      if(arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      // if(arr[j] > arr[j + 1]) swap(arr, j, j + 1)
    }
  }
  // 4. return sorted array
  return arr
}

// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  let noSwaps;
  for(let i = arr.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[ j+ 1] = temp
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);

// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){
  for(var i = arr.length; i > 0; i--){
    for(var j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;         
      }
    }
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);