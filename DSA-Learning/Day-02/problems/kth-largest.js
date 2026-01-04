/**
 * Problem: Kth Largest Element in an Array
 * 
 * Find the kth largest element in an unsorted array.
 * Note: It is the kth largest element in sorted order, not the kth distinct element.
 * 
 * Example:
 * Input: nums = [3,2,1,5,6,4], k = 2
 * Output: 5
 * 
 * Example 2:
 * Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
 * Output: 4
 * 
 * Time Complexity Goal: O(n) average case
 * Space Complexity Goal: O(1)
 * 
 * Approaches:
 * 1. Sort and return nums[n-k] - O(n log n)
 * 2. Min heap of size k - O(n log k)
 * 3. Quickselect algorithm - O(n) average
 */

function findKthLargest(nums, k) {
    // Your solution here

}

// Test cases
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Expected: 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Expected: 4

module.exports = findKthLargest;
