/**
 * HashMap Problems - Complete Solutions
 */

/**
 * Problem 1: Two Sum
 * Time: O(n), Space: O(n)
 */
function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
}

/**
 * Problem 2: Contains Duplicate
 * Time: O(n), Space: O(n)
 */
function containsDuplicate(nums) {
    const seen = new Set();

    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }

    return false;
}

/**
 * Problem 3: Group Anagrams
 * Time: O(n * k log k), Space: O(n * k)
 * where n is number of strings, k is average string length
 */
function groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        // Sort characters to create key
        const sorted = str.split('').sort().join('');

        if (!map.has(sorted)) {
            map.set(sorted, []);
        }

        map.get(sorted).push(str);
    }

    return Array.from(map.values());
}

/**
 * Problem 4: First Unique Character
 * Time: O(n), Space: O(1) - at most 26 characters
 */
function firstUniqChar(s) {
    const charCount = new Map();

    // Count frequency of each character
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Find first character with count 1
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}

// Test cases
console.log('Two Sum:', twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log('Contains Duplicate:', containsDuplicate([1, 2, 3, 1])); // true
console.log('Group Anagrams:', groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log('First Unique:', firstUniqChar("leetcode")); // 0
console.log('First Unique:', firstUniqChar("loveleetcode")); // 2

/**
 * Additional Problem: Longest Substring Without Repeating Characters
 * Time: O(n), Space: O(min(n, m)) where m is charset size
 */
function lengthOfLongestSubstring(s) {
    const charIndex = new Map();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        // If character seen before and within current window
        if (charIndex.has(char) && charIndex.get(char) >= start) {
            start = charIndex.get(char) + 1;
        }

        charIndex.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log('Longest Substring:', lengthOfLongestSubstring("abcabcbb")); // 3

