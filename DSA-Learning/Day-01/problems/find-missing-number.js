/**
 * Problem: Find Missing Number
 * 
 * Given an array containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 * 
 * Example:
 * Input: nums = [3,0,1]
 * Output: 2
 * Explanation: n = 3 since there are 3 numbers, so all numbers are in [0,3].
 * 2 is the missing number since it does not appear in nums.
 * 
 * Example 2:
 * Input: nums = [0,1]
 * Output: 2
 * 
 * Example 3:
 * Input: nums = [9,6,4,2,3,5,7,0,1]
 * Output: 8
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1)
 * 
 * Hint: Try using XOR or the mathematical formula for sum of n numbers
 */

function findMissingNumber(nums) {
    // Your solution here

}

// Test cases
console.log(findMissingNumber([3, 0, 1])); // Expected: 2
console.log(findMissingNumber([0, 1])); // Expected: 2
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Expected: 8
console.log(findMissingNumber([0])); // Expected: 1

module.exports = findMissingNumber;
