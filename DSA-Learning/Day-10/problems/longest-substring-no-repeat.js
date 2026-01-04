/**
 * Problem: Longest Substring Without Repeating Characters
 * 
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * 
 * Example:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: "abc" is the longest substring without repeating characters
 * 
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: "b" is the longest
 * 
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: "wke" is the longest
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(min(n, m)) where m is charset size
 */

function lengthOfLongestSubstring(s) {
    // Your solution here

}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3
console.log(lengthOfLongestSubstring("")); // Expected: 0

module.exports = lengthOfLongestSubstring;
