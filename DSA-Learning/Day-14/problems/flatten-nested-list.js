/**
 * Problem: Flatten Nested Array
 * 
 * Given a nested array (array of integers and arrays),
 * flatten it into a single-level array.
 * 
 * Example:
 * Input: [1, [2, 3], [[4], 5]]
 * Output: [1, 2, 3, 4, 5]
 * 
 * Example 2:
 * Input: [1, [2, [3, [4, [5]]]]]
 * Output: [1, 2, 3, 4, 5]
 * 
 * Time Complexity Goal: O(n) where n is total number of integers
 * Space Complexity: O(d) where d is maximum nesting depth
 */

function flattenArray(arr) {
    // Your solution here
    // Try both recursive and iterative approaches

}

// Test cases
console.log(flattenArray([1, [2, 3], [[4], 5]])); // Expected: [1, 2, 3, 4, 5]
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Expected: [1, 2, 3, 4, 5]
console.log(flattenArray([[1, 1], 2, [1, 1]])); // Expected: [1, 1, 2, 1, 1]

module.exports = flattenArray;
