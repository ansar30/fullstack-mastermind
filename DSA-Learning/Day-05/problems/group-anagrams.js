/**
 * Problem: Group Anagrams
 * 
 * Given an array of strings, group the anagrams together.
 * You can return the answer in any order.
 * 
 * Example:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 * 
 * Time Complexity Goal: O(n * k log k) where n = strs length, k = max string length
 * Optimal: O(n * k)
 */

function groupAnagrams(strs) {
    // Your solution here

}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Expected: [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams([""]));
// Expected: [[""]]

console.log(groupAnagrams(["a"]));
// Expected: [["a"]]

module.exports = groupAnagrams;
