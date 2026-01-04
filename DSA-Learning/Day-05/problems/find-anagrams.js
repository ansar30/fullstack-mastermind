/**
 * Problem: Find All Anagrams in a String
 * 
 * Given two strings s and p, return an array of all the start indices
 * of p's anagrams in s.
 * 
 * Example:
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0,6]
 * Explanation:
 * At index 0: "cba" (anagram of "abc")
 * At index 6: "bac" (anagram of "abc")
 * 
 * Example 2:
 * Input: s = "abab", p = "ab"
 * Output: [0,1,2]
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1)
 */

function findAnagrams(s, p) {
    // Your solution here
    // Hint: Use sliding window with frequency map

}

// Test cases
console.log(findAnagrams("cbaebabacd", "abc")); // Expected: [0, 6]
console.log(findAnagrams("abab", "ab")); // Expected: [0, 1, 2]

module.exports = findAnagrams;
