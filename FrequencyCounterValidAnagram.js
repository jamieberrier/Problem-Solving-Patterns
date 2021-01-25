function validAnagram(s, t){
  // check if string lengths are equal, return false if not
  if(s.length !== t.length) return false;
  //  create object for each string
  let sCounter = {};
  let tCounter = {};
  // loop over 1st string and add to object
  for(let char of s) {
      sCounter[char] = ++sCounter[char] || 1;
  }
  // loop over 2nd string and add to object
  for(let char of t) {
      tCounter[char] = ++tCounter[char] || 1;
  }
  // loop over 2nd string's object and compare to 1st string's object
  for(let key in tCounter) {
    // check if key exists, return false if not
    if(!(key in sCounter)) return false;
    // check if values match, return false if not
    if(tCounter[key] !== sCounter[key]) return false;
  }
  // if make it thru loop, return true
  return true;
}

/**
 * Alternate Solution
 * create only one object, for 1st string, decrement from value if letter is in 2nd string
 * if value is 0, or not in object return false
 */
var isAnagram = function(s, t) {
  // check if string lengths are equal, return false if not
  if(s.length !== t.length) return false
  
  //  create object to break down 1st string
  let lookup = {}
  
  // loop over 1st string and add to object
  for(let char of s) {
    lookup[char] = ++lookup[char] || 1
  }
  
  // loop over 2nd string and compare to object
  for(let letter of t) {
      // if letter is NOT in lookup or is 0
      if(!lookup[letter]) {
          // not an anagram
          return false
      } else {
          // subtract 1 from value
          --lookup[letter]
      }
  }
  // if make it thru loop, return true
  return true;
};

