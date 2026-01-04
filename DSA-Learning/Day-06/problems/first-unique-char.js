/**
 * Problem: First Unique Character in a String
 * 
 * Given a string s, find the first non-repeating character and return its index.
 * If it does not exist, return -1.
 * 
 * Example:
 * Input: s = "leetcode"
 * Output: 0
 * Explanation: 'l' is the first character that appears only once
 * 
 * Example 2:
 * Input: s = "loveleetcode"
 * Output: 2
 * Explanation: 'v' is the first character that appears only once
 * 
 * Example 3:
 * Input: s = "aabb"
 * Output: -1
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1) - max 26 letters
 */

function firstUniqChar(s) {
    // Your solution here

}

// Test cases
console.log(firstUniqChar("leetcode")); // Expected: 0
console.log(firstUniqChar("loveleetcode")); // Expected: 2
console.log(firstUniqChar("aabb")); // Expected: -1

module.exports = firstUniqChar;
