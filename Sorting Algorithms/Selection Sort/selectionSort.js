/*
Pseudocode:
- make a variable to store the index of the smallest item (e.g. min) - intially, set the 1st element as the smallest value you've seen so far
- compare arr[min] to the next item in the array - until you find a smaller value
- if a smaller number is found, designate that smaller value's index to be the new min - continue until the end of the array
- if the min is not the index you initially began with, swap the 2 values
- repeat this with the next item until the array is sorted - shrinking the window
*/

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    // declare current minimum value's index
    // intially, set to index of 1st element
    // increment with each pass to grow sorted subsection and shrink unsorted subsection

      // min is incremented with each pass to shrink the searchable subset, 
      // decreasing the number of comparisons, 
      // since the smallest value is now sorted at the beginning
    let currentMin = i
    for(let j = i + 1; j < arr.length; j++) {
      // compare arr[currentMin] to the next item in the array
      if(arr[j] < arr[currentMin]) {
        // if smaller value found, assign that value's index to currentMin
        currentMin = j
      }
    }
    // if currentMin is not the index you initially began with (i.e. i)
    if(i !== currentMin) {
      // swap the 2 values
      [arr[i], arr[currentMin]] = [arr[currentMin], arr[i]]
    }
  }
  // return the sorted array
  return arr
}

selectionSort([0,2,34,22,10,19,17]); // [0, 2, 10, 17, 19, 22, 34]


// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr){
  for(var i = 0; i < arr.length; i++){
      var lowest = i;
      for(var j = i+1; j < arr.length; j++){
          if(arr[j] < arr[lowest]){
              lowest = j;
          }
      }
      if(i !== lowest){
          //SWAP!
          var temp = arr[i];
          arr[i] = arr[lowest];
          arr[lowest] = temp;
      }
  }
  return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

for (let i = 0; i < arr.length; i++) {
  let lowest = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[lowest] > arr[j]) {
      lowest = j;
    }
  }
  if (i !== lowest) swap(arr, i, lowest);
}

return arr;
}

selectionSort([0,2,34,22,10,19,17]);