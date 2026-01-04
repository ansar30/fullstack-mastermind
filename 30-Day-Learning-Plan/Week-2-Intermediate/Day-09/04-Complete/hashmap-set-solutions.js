/**
 * HashMap and Set Advanced - Complete Solutions
 */

/**
 * Problem 1: Longest Consecutive Sequence
 * Time: O(n), Space: O(n)
 */
function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longest = 0;
    
    for (const num of numSet) {
        // Only start counting if this is the start of a sequence
        if (!numSet.has(num - 1)) {
            let current = num;
            let length = 1;
            
            // Count consecutive numbers
            while (numSet.has(current + 1)) {
                current++;
                length++;
            }
            
            longest = Math.max(longest, length);
        }
    }
    
    return longest;
}

/**
 * Problem 2: Subarray Sum Equals K
 * Time: O(n), Space: O(n)
 */
function subarraySum(nums, k) {
    const map = new Map();
    map.set(0, 1); // Empty subarray has sum 0
    let count = 0;
    let sum = 0;
    
    for (const num of nums) {
        sum += num;
        
        // If (sum - k) exists, we found a subarray
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        
        // Store current prefix sum
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return count;
}

/**
 * Problem 3: Group Anagrams
 * Time: O(n * k log k), Space: O(n * k)
 */
function groupAnagrams(strs) {
    const map = new Map();
    
    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(str);
    }
    
    return Array.from(map.values());
}

// Test cases
console.log('Longest Consecutive:', longestConsecutive([100,4,200,1,3,2])); // 4
console.log('Subarray Sum:', subarraySum([1,1,1], 2)); // 2
console.log('Group Anagrams:', groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

