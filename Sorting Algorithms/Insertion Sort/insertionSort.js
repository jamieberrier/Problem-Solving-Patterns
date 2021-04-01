/*
  Gradually builds up the sort by creating a left subsection, which is always sorted

  Pseudocode:
  1. Start by picking the 2nd element in the array (the 1st element is the sorted subsection)
  2. Compare 2nd element to the 1st element, swap if 2nd is smaller
  3. Continue to the next element and if it's in the incorrect order, iterate through the sorted subsection to put the element in the correct place
  4. Continue until the array is sorted
  5. Return the sorted array
*/


function insertionSort(arr){
	let currentVal;

  for(let i = 1; i < arr.length; i++) {
    currentVal = arr[i];

    // break if arr[j] is less than or equal to currentVal
    for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    // put currentVal on the right of arr[j]
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2,1,9,76,4])