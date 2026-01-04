/**
 * Sliding Window Problems - Complete Solutions
 */

/**
 * Problem 1: Maximum Sum Subarray of Size K
 * Time: O(n), Space: O(1)
 */
function maxSumSubarray(arr, k) {
    if (arr.length < k) return 0;
    
    let windowSum = 0;
    
    // Calculate first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    let maxSum = windowSum;
    
    // Slide window
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

/**
 * Problem 2: Longest Substring Without Repeating Characters
 * Time: O(n), Space: O(min(n, m)) where m is charset size
 */
function lengthOfLongestSubstring(s) {
    const charIndex = new Map();
    let maxLength = 0;
    let start = 0;
    
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        
        // If character seen and within current window
        if (charIndex.has(char) && charIndex.get(char) >= start) {
            start = charIndex.get(char) + 1;
        }
        
        charIndex.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

/**
 * Problem 3: Minimum Window Substring
 * Time: O(|s| + |t|), Space: O(|s| + |t|)
 */
function minWindow(s, t) {
    const need = new Map();
    for (const char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }
    
    let left = 0, right = 0;
    let valid = 0;
    const window = new Map();
    let start = 0, len = Infinity;
    
    while (right < s.length) {
        const c = s[right];
        right++;
        
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }
        
        while (valid === need.size) {
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            
            const d = s[left];
            left++;
            
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }
    
    return len === Infinity ? '' : s.substring(start, start + len);
}

/**
 * Problem 4: Maximum Average Subarray
 * Time: O(n), Space: O(1)
 */
function findMaxAverage(nums, k) {
    let windowSum = 0;
    
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    
    let maxSum = windowSum;
    
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum / k;
}

// Test cases
console.log('Max Sum:', maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // 9
console.log('Longest Substring:', lengthOfLongestSubstring("abcabcbb")); // 3
console.log('Min Window:', minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log('Max Average:', findMaxAverage([1,12,-5,-6,50,3], 4)); // 12.75

