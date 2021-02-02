// Pattern: Frequency Counter / Multiple Pointers

// Implement a function called areThereDuplicates which accepts a
// variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in. 

// Frequency Counter
function areThereDuplicates(...args) {
  let argsHash = {}

  for(let element of args) {
    // if element is in argsHash, add 1 to value
    // if element not in argsHash, add it
    argsHash[element] ? argsHash[element] += 1 : argsHash[element] = 1
  }
  // if any value is greater than 1, return true
  for(let key in argsHash) {
    if (argsHash[key] > 1) return true
  }
  // made it through loop, return false
  return false
}

// Two pointers
function areThereDuplicates(...args) {
  args.sort((a,b) => a > b);

  let start = 0;
  let next = 1;

  while(next < args.length){
    if(args[start] === args[next]){
      return true
    }
    start++
    next++
  }
  
  return false
}
