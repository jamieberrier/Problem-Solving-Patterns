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
  // frequency counter
  let seen = {}
  // substring counter
  let longest = 0

  // grow window (increase end) if next char doesn't match a char in substring
  // if character matches, set start of window to end
  for(let i = 0; i < str.length; i++) {

  }  

  return longest
}