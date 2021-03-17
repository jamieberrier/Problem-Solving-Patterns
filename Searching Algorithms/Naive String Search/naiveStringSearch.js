/*
Pseudocode
- loop over the longer string
- loop over the shorter string
- if the characters don't match, break out of the inner loop
- if the characters do match keep going
- if you complete the inner loop and find a match, increment the count of matches
- return the count
*/

function stringSearch(long, short) {
  let count = 0

  // outer loop
  for(let i = 0; i < long.length; i++) {
    // inner loop
    for(let j = 0; j < short.length; j++) {
      if(long[i] !== short[j]) break

      if(j === short.length - 1 ) ++count

      ++i
    }
  }

  return count
}