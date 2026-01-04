/**
 * Problem: Minimum Window Substring
 * 
 * Given two strings s and t, return the minimum window substring of s
 * such that every character in t is included in the window.
 * If there is no such substring, return "".
 * 
 * Example:
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: "BANC" is the minimum window that contains A, B, C
 * 
 * Example 2:
 * Input: s = "a", t = "a"
 * Output: "a"
 * 
 * Example 3:
 * Input: s = "a", t = "aa"
 * Output: ""
 * 
 * Time Complexity Goal: O(n + m)
 * Space Complexity Goal: O(m) where m = t.length
 */

function minWindow(s, t) {
    // Your solution here
    // This is a hard problem!
    // Hint: Use two hash maps - one for t, one for current window

}

// Test cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"
console.log(minWindow("a", "a")); // Expected: "a"
console.log(minWindow("a", "aa")); // Expected: ""

module.exports = minWindow;
