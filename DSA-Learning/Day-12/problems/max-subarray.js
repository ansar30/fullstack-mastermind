/**
 * Problem: Maximum Subarray (Kadane's Algorithm)
 * 
 * Given an integer array nums, find the subarray with the largest sum,
 * and return its sum.
 * 
 * Example:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: Subarray [4,-1,2,1] has the largest sum 6
 * 
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 * 
 * Example 3:
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 * Explanation: Subarray [5,4,-1,7,8] has sum 23
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1)
 */

function maxSubArray(nums) {
    // Your solution here
    // Use Kadane's Algorithm

}

// Test cases
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // Expected: 23

module.exports = maxSubArray;
