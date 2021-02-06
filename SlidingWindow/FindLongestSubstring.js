// Pattern: Sliding Window

// Write a function called findLongestSubstring, which accepts a string
// and returns the length of the longest substring with all distinct characters.

// Time Complexity: O(n)

// Examples:
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

function findLongestSubstring(str){
  if(str.length === 0 || str.length === 1) return str.length
  // beginning of window
  let start = 0
  // end of window
  let end = 1
  // substring
  let subStr = str[start]

  // grow window (increase end) if next char doesn't match a char in substring
  // if character matches, set start of window to end
  while(start < end) {
    // if substring doesn't include char at end
    if(!subStr.includes(str[end])) {
      // add char to subStr
      subStr += str[end]
      // increment end
      ++end
    } else if(subStr.length < str.substring(end).length){ // if length of remaining char > subStr.length
      // set start of window to 1st char of dup
      start = end
      // set subStr to char at new start
      subStr = str[start]
      ++end
    } else {
      break
    }
  }

  return subStr.length
}