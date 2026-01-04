/**
 * Problem: Two Sum
 * 
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * 
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: nums[0] + nums[1] == 9, so return [0, 1]
 * 
 * Constraints:
 * - Only one valid answer exists
 * - Can't use the same element twice
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(n)
 */

function twoSum(nums, target) {
    // Your solution here
    
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]

module.exports = twoSum;
