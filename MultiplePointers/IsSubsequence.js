// Write a function called isSubsequence which takes in two srings
// and checks whether the characters in the first string for a subsequence
// of the characters in the 2nd string. 
// In other words, the function should check whether the characters in the
// 1st string appear somewhere in the 2nd string, without their order changing

// MUST have AT LEAST the following complexities:
// Time: O(n + m)
// Space: O(1)

// isSubsequence('hello', 'hello world') // true
// isSubsequence('sing', 'sting') // true
// isSubsequence('abc', 'abracadabra') // true
// isSubsequence('abc', 'acb') // false

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;

    if (!str1) return true;

    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    
    return false;
}