/**
 * Problem: String Compression
 * 
 * Implement a method to perform basic string compression using counts
 * of repeated characters. If the compressed string is not smaller than
 * the original string, return the original string.
 * 
 * Example:
 * Input: chars = ["a","a","b","b","c","c","c"]
 * Output: 6, chars = ["a","2","b","2","c","3","_","_"]
 * Return the first 6 characters: "a2b2c3"
 * 
 * Example 2:
 * Input: chars = ["a"]
 * Output: 1, chars = ["a"]
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1) - modify in place
 */

function compress(chars) {
    // Your solution here

}

// Test cases
let test1 = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(test1)); // Expected: 6
console.log(test1.slice(0, 6)); // Expected: ["a","2","b","2","c","3"]

let test2 = ["a"];
console.log(compress(test2)); // Expected: 1
console.log(test2); // Expected: ["a"]

module.exports = compress;
