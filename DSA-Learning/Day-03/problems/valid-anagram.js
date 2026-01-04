/**
 * Problem: Valid Anagram
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word formed by rearranging the letters of another word.
 * 
 * Example:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1) - since only 26 letters possible
 * 
 * Approaches:
 * 1. Sort both strings - O(n log n)
 * 2. Frequency map - O(n) ⭐
 * 3. Character count array - O(n) with O(1) space
 */

function isAnagram(s, t) {
    // Your solution here

}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false
console.log(isAnagram("listen", "silent")); // Expected: true

module.exports = isAnagram;
