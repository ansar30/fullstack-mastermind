/**
 * Problem: Isomorphic Strings
 * 
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while
 * preserving the order. No two characters may map to the same character,
 * but a character may map to itself.
 * 
 * Example:
 * Input: s = "egg", t = "add"
 * Output: true
 * Explanation: e→a, g→d
 * 
 * Example 2:
 * Input: s = "foo", t = "bar"
 * Output: false
 * Explanation: o cannot map to both a and r
 * 
 * Example 3:
 * Input: s = "paper", t = "title"
 * Output: true
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1) - max 256 ASCII characters
 */

function isIsomorphic(s, t) {
    // Your solution here

}

// Test cases
console.log(isIsomorphic("egg", "add")); // Expected: true
console.log(isIsomorphic("foo", "bar")); // Expected: false
console.log(isIsomorphic("paper", "title")); // Expected: true

module.exports = isIsomorphic;
