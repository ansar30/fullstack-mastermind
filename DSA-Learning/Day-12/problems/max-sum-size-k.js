/**
 * Problem: Maximum Sum of Subarray of Size K
 * 
 * Given an array of integers and a number k,
 * find the maximum sum of any contiguous subarray of size k.
 * 
 * Example:
 * Input: arr = [2, 1, 5, 1, 3, 2], k = 3
 * Output: 9
 * Explanation: Subarray [5, 1, 3] has sum 9
 * 
 * Example 2:
 * Input: arr = [2, 3, 4, 1, 5], k = 2
 * Output: 7
 * Explanation: Subarray [3, 4] has sum 7
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1)
 */

function maxSumSubarrayOfSizeK(arr, k) {
    // Your solution here
    // Use fixed-size sliding window

}

// Test cases
console.log(maxSumSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3)); // Expected: 9
console.log(maxSumSubarrayOfSizeK([2, 3, 4, 1, 5], 2)); // Expected: 7

module.exports = maxSumSubarrayOfSizeK;
