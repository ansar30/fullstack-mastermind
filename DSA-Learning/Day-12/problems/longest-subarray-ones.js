/**
 * Problem: Longest Subarray of 1's After Deleting One Element
 * 
 * Given a binary array nums, you should delete one element from it.
 * Return the size of the longest non-empty subarray containing only 1's.
 * If there is no such subarray, return 0.
 * 
 * Example:
 * Input: nums = [1,1,0,1]
 * Output: 3
 * Explanation: After deleting 0, longest subarray is [1,1,1]
 * 
 * Example 2:
 * Input: nums = [0,1,1,1,0,1,1,0,1]
 * Output: 5
 * Explanation: Delete 0 at index 4: [0,1,1,1,1,1,0,1]
 * 
 * Example 3:
 * Input: nums = [1,1,1]
 * Output: 2
 * Explanation: Must delete one element
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1)
 * 
 * Hint: Use sliding window, allow at most one 0 in window
 */

function longestSubarray(nums) {
    // Your solution here

}

// Test cases
console.log(longestSubarray([1, 1, 0, 1])); // Expected: 3
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])); // Expected: 5
console.log(longestSubarray([1, 1, 1])); // Expected: 2

module.exports = longestSubarray;
