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