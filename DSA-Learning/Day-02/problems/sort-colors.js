/**
 * Problem: Sort Colors (Dutch National Flag Problem)
 * 
 * Given an array with objects colored red, white or blue (represented as 0, 1, 2),
 * sort them in-place so that objects of the same color are adjacent.
 * Colors must be in order: red (0), white (1), blue (2).
 * 
 * Example:
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1)
 * 
 * Challenge: Do this in one pass (single loop)
 */

function sortColors(nums) {
    // Your solution here
    // Hint: Use three pointers - low, mid, high

}

// Test cases
let test1 = [2, 0, 2, 1, 1, 0];
sortColors(test1);
console.log(test1); // Expected: [0, 0, 1, 1, 2, 2]

let test2 = [2, 0, 1];
sortColors(test2);
console.log(test2); // Expected: [0, 1, 2]

module.exports = sortColors;
