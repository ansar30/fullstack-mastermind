/**
 * Problem: Top K Frequent Elements
 * 
 * Given an integer array and an integer k,
 * return the k most frequent elements.
 * 
 * Example:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * 
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 * Time Complexity Goal: O(n)
 * 
 * Approaches:
 * 1. Hash map + Sort - O(n log n)
 * 2. Hash map + Min Heap - O(n log k)
 * 3. Hash map + Bucket Sort - O(n) ⭐
 */

function topKFrequent(nums, k) {
    // Your solution here

}

// Test cases
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Expected: [1, 2]
console.log(topKFrequent([1], 1)); // Expected: [1]
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)); // Expected: [-1, 2]

module.exports = topKFrequent;
