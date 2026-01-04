/**
 * Problem: Jewels and Stones
 * 
 * You're given strings jewels representing types of stones that are jewels,
 * and stones representing stones you have. Each character in stones is a type of stone.
 * You want to know how many of the stones you have are also jewels.
 * Letters are case sensitive.
 * 
 * Example:
 * Input: jewels = "aA", stones = "aAAbbbb"
 * Output: 3
 * 
 * Example 2:
 * Input: jewels = "z", stones = "ZZ"
 * Output: 0
 * 
 * Time Complexity Goal: O(n + m)
 * Space Complexity Goal: O(n)
 */

function numJewelsInStones(jewels, stones) {
    // Your solution here

}

// Test cases
console.log(numJewelsInStones("aA", "aAAbbbb")); // Expected: 3
console.log(numJewelsInStones("z", "ZZ")); // Expected: 0

module.exports = numJewelsInStones;
