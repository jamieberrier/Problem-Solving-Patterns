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
  // store char and it's highest index in str
  let seen = {}
  // unique char counter
  let longest = 0

  for(let i = 0; i < str.length; i++) {
    // get the letter at i in the string
    let char = str[i]
    // if the letter is a dup, start new window
    // set start to the max of either start 
    // or the most recent index of the dup letter in seen
    if(seen[char]) start = Math.max(start, seen[char])
    // set longest to the max of either longest 
    // or index - beginning of substring + 1 (to include current in count)
    // increment longest if letter not dup
    longest = Math.max(longest, i - start + 1)
    // change the index of the dup letter to new index, so as to not double count
    seen[char] = i + 1
  }  
  
  return longest
}