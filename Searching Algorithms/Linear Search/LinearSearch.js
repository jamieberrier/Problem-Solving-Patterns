// Write a function that accepts an array and a value
// and returns the index of the value. If the value
// does not exist, return -1

// linearSearch([10,15,20,25,30],15) -> 1

function linearSearch(arr, num){
  let numIndex = -1

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === num) numIndex = i
  }

  return numIndex
}