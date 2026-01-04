/**
 * Frequency Map Problems - Complete Solutions
 */

/**
 * Problem 1: Top K Frequent Elements
 * Time: O(n log n), Space: O(n)
 */
function topKFrequent(nums, k) {
    const freq = new Map();
    
    // Count frequency
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    
    // Sort by frequency and get top k
    return Array.from(freq.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(entry => entry[0]);
}

/**
 * Problem 2: Find All Anagrams in a String
 * Time: O(|s|), Space: O(|p|)
 */
function findAnagrams(s, p) {
    const result = [];
    const pFreq = new Map();
    
    // Count frequency of pattern
    for (const char of p) {
        pFreq.set(char, (pFreq.get(char) || 0) + 1);
    }
    
    let left = 0;
    const windowFreq = new Map();
    let matchCount = 0;
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        // Expand window
        if (pFreq.has(char)) {
            windowFreq.set(char, (windowFreq.get(char) || 0) + 1);
            if (windowFreq.get(char) === pFreq.get(char)) {
                matchCount++;
            }
        }
        
        // Shrink window if too large
        if (right - left + 1 > p.length) {
            const leftChar = s[left];
            if (pFreq.has(leftChar)) {
                if (windowFreq.get(leftChar) === pFreq.get(leftChar)) {
                    matchCount--;
                }
                windowFreq.set(leftChar, windowFreq.get(leftChar) - 1);
            }
            left++;
        }
        
        // Check if window is anagram
        if (matchCount === pFreq.size) {
            result.push(left);
        }
    }
    
    return result;
}

/**
 * Problem 3: First Unique Character
 * Time: O(n), Space: O(1) - fixed alphabet
 */
function firstUniqChar(s) {
    const charCount = new Map();
    
    // Count frequency
    for (let i = 0; i < s.length; i++) {
        charCount.set(s[i], (charCount.get(s[i]) || 0) + 1);
    }
    
    // Find first unique
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }
    
    return -1;
}

// Test cases
console.log('Top K:', topKFrequent([1,1,1,2,2,3], 2)); // [1, 2]
console.log('Anagrams:', findAnagrams("cbaebabacd", "abc")); // [0, 6]
console.log('First Unique:', firstUniqChar("leetcode")); // 0

