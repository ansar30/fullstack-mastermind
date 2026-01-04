/**
 * Prefix Sums Practice Problems
 */

/**
 * Problem 1: Range Sum Query
 * Given an integer array, handle multiple queries of the form:
 * sumRange(left, right) - sum of elements from index left to right.
 */
class NumArray {
    constructor(nums) {
        // TODO: Build prefix sum array
    }
    
    sumRange(left, right) {
        // TODO: Return range sum in O(1)
    }
}

/**
 * Problem 2: Subarray Sum Equals K
 * Given an array of integers and an integer k, find the total
 * number of continuous subarrays whose sum equals to k.
 */
function subarraySum(nums, k) {
    // TODO: Implement using prefix sums and hash map
}

// Test cases
const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log('Range Sum:', numArray.sumRange(0, 2)); // 1
console.log('Subarray Sum:', subarraySum([1,1,1], 2)); // 2

