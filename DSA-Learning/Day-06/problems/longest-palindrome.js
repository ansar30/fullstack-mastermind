/**
 * Problem: Longest Palindrome
 * 
 * Given a string which consists of lowercase or uppercase letters,
 * find the length of the longest palindrome that can be built with those letters.
 * Case sensitive: "Aa" is not considered a palindrome.
 * 
 * Example:
 * Input: s = "abccccdd"
 * Output: 7
 * Explanation: One longest palindrome is "dccaccd", length = 7
 * 
 * Example 2:
 * Input: s = "a"
 * Output: 1
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1)
 */

function longestPalindrome(s) {
    // Your solution here
    // Hint: Count character frequencies
    // Use all even counts + one odd in middle

}

// Test cases
console.log(longestPalindrome("abccccdd")); // Expected: 7
console.log(longestPalindrome("a")); // Expected: 1
console.log(longestPalindrome("bb")); // Expected: 2

module.exports = longestPalindrome;
