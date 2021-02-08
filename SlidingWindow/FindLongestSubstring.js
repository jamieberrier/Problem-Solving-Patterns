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
    // get a letter in the string
    let char = str[i]
    // if letter has been seen, set start to max of start or index of seen[char]
    if(seen[char]) start = Math.max(start, seen[char])
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1)
    // store the index of the next char so as to not double count
    seen[char] = i + 1
  }  
  
  return longest
}