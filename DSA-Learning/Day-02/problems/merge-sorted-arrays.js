/**
 * Problem: Merge Two Sorted Arrays
 * 
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1
 * as one sorted array. Assume nums1 has enough space to hold additional elements.
 * 
 * Example:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * 
 * Time Complexity Goal: O(m + n)
 * Space Complexity Goal: O(1)
 */

function merge(nums1, m, nums2, n) {
    // Your solution here

}

// Test cases
let test1 = [1, 2, 3, 0, 0, 0];
merge(test1, 3, [2, 5, 6], 3);
console.log(test1); // Expected: [1, 2, 2, 3, 5, 6]

let test2 = [1];
merge(test2, 1, [], 0);
console.log(test2); // Expected: [1]

module.exports = merge;
