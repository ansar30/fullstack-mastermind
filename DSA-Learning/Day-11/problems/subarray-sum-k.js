/**
 * Problem: Subarray Sum Equals K
 * 
 * Given an array of integers nums and an integer k,
 * return the total number of subarrays whose sum equals to k.
 * 
 * Example:
 * Input: nums = [1,1,1], k = 2
 * Output: 2
 * Explanation: [1,1] and [1,1] (different positions)
 * 
 * Example 2:
 * Input: nums = [1,2,3], k = 3
 * Output: 2
 * Explanation: [1,2] and [3]
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(n)
 * 
 * Hint: Use prefix sum + hash map
 */

function subarraySum(nums, k) {
    // Your solution here

}

// Test cases
console.log(subarraySum([1, 1, 1], 2)); // Expected: 2
console.log(subarraySum([1, 2, 3], 3)); // Expected: 2
console.log(subarraySum([1, -1, 0], 0)); // Expected: 3

module.exports = subarraySum;
