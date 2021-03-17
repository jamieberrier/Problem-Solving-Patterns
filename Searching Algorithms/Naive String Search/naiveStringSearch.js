/*
Pseudocode
1. loop over the longer string
2. loop over the shorter string
3. if the characters don't match, break out of the inner loop
4. if the characters do match keep going
5. if you complete the inner loop and find a match, increment the count of matches
6. return the count
*/

function stringSearch(long, short) {
  let count = 0

  // 1. loop over the longer string
  for(let i = 0; i < long.length; i++) {
    // 2. loop over the shorter string
    for(let j = 0; j < short.length; j++) {
      // 3. if the characters don't match, break out of the inner loop
      if(long[i] !== short[j]) break
      // 4. if the characters do match keep going
      ++i
      // 5. if you complete the inner loop and find a match, increment the count of matches
      if(j === short.length - 1 ) ++count
    }
  }
  // 6. return the count
  return count
}

/* Udemy
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")
*/