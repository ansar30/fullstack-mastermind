/**
 * Problem: Word Pattern
 * 
 * Given a pattern and a string s, find if s follows the same pattern.
 * Follow means a full match, such that there is a bijection between
 * a letter in pattern and a non-empty word in s.
 * 
 * Example:
 * Input: pattern = "abba", s = "dog cat cat dog"
 * Output: true
 * 
 * Example 2:
 * Input: pattern = "abba", s = "dog cat cat fish"
 * Output: false
 * 
 * Example 3:
 * Input: pattern = "aaaa", s = "dog cat cat dog"
 * Output: false
 * 
 * Time Complexity Goal: O(n)
 * Note: Need bidirectional mapping (pattern → word and word → pattern)
 */

function wordPattern(pattern, s) {
    // Your solution here

}

// Test cases
console.log(wordPattern("abba", "dog cat cat dog")); // Expected: true
console.log(wordPattern("abba", "dog cat cat fish")); // Expected: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Expected: false

module.exports = wordPattern;
