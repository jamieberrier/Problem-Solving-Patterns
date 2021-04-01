/*
  Gradually builds up the sort by creating a left subsection, which is always sorted

  Pseudocode:
  1. Start by picking the second element in the array
*/


function insertionSort(arr){
	var currentVal;

  for(var i = 1; i < arr.length; i++){
    currentVal = arr[i];

    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2,1,9,76,4])