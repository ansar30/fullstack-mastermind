/**
 * Problem: Remove Duplicates from Sorted Array
 * 
 * Given a sorted array nums, remove duplicates in-place such that
 * each element appears only once and return the new length.
 * Do not allocate extra space - modify the input array in-place.
 * 
 * Example:
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Explanation: Your function should return length 2, with first two elements being 1 and 2
 * 
 * Example 2:
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1)
 */

function removeDuplicates(nums) {
    // Your solution here

}

// Test cases
let test1 = [1, 1, 2];
console.log(removeDuplicates(test1)); // Expected: 2
console.log(test1.slice(0, 2)); // Expected: [1, 2]

let test2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(test2)); // Expected: 5
console.log(test2.slice(0, 5)); // Expected: [0, 1, 2, 3, 4]

module.exports = removeDuplicates;
