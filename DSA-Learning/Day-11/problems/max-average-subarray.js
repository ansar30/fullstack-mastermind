/**
 * Problem: Maximum Average Subarray I
 * 
 * You are given an integer array nums consisting of n elements, and an integer k.
 * Find a contiguous subarray whose length is equal to k that has
 * the maximum average value and return this value.
 * 
 * Example:
 * Input: nums = [1,12,-5,-6,50,3], k = 4
 * Output: 12.75000
 * Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 * 
 * Example 2:
 * Input: nums = [5], k = 1
 * Output: 5.00000
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1)
 */

function findMaxAverage(nums, k) {
    // Your solution here

}

// Test cases
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // Expected: 12.75
console.log(findMaxAverage([5], 1)); // Expected: 5.0

module.exports = findMaxAverage;
