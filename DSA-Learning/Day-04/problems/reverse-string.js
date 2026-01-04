/**
 * Problem: Reverse String
 * 
 * Write a function that reverses a string.
 * The input string is given as an array of characters.
 * Do it in-place with O(1) extra memory.
 * 
 * Example:
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1)
 */

function reverseString(s) {
    // Your solution here

}

// Test cases
let test1 = ["h", "e", "l", "l", "o"];
reverseString(test1);
console.log(test1); // Expected: ["o", "l", "l", "e", "h"]

let test2 = ["H", "a", "n", "n", "a", "h"];
reverseString(test2);
console.log(test2); // Expected: ["h", "a", "n", "n", "a", "H"]

module.exports = reverseString;
