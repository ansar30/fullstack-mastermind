/**
 * Problem: Longest Repeating Character Replacement
 * 
 * You are given a string s and an integer k. You can choose any character
 * and change it to any other character. You can perform this at most k times.
 * Return the length of the longest substring containing the same letter
 * after performing the operations.
 * 
 * Example:
 * Input: s = "ABAB", k = 2
 * Output: 4
 * Explanation: Replace two 'A's with 'B's or vice versa
 * 
 * Example 2:
 * Input: s = "AABABBA", k = 1
 * Output: 4
 * Explanation: Replace one 'A' in middle: "AABBBBA"
 * Substring "BBBB" has length 4
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1) - max 26 letters
 */

function characterReplacement(s, k) {
    // Your solution here
    // Hint: Track frequency of characters in window
    // Window is valid if: windowSize - maxFreq <= k

}

// Test cases
console.log(characterReplacement("ABAB", 2)); // Expected: 4
console.log(characterReplacement("AABABBA", 1)); // Expected: 4

module.exports = characterReplacement;
