/**
 * Problem: Majority Element
 * 
 * Given an array of size n, find the majority element.
 * The majority element is the element that appears more than ⌊n/2⌋ times.
 * You may assume that the majority element always exists in the array.
 * 
 * Example:
 * Input: nums = [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1) - Try Boyer-Moore Voting Algorithm
 * 
 * Approaches:
 * 1. Hash map - O(n) time, O(n) space
 * 2. Sorting - O(n log n) time, O(1) space
 * 3. Boyer-Moore - O(n) time, O(1) space ⭐
 */

function majorityElement(nums) {
    // Your solution here

}

// Test cases
console.log(majorityElement([3, 2, 3])); // Expected: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Expected: 2

module.exports = majorityElement;
