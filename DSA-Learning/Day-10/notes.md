# Day 10 - Learning Notes

## Sliding Window Technique

### When to Use
- Finding subarrays/substrings that satisfy certain conditions
- Optimizing from O(n²) brute force to O(n)
- Problems involving contiguous sequences

### Types of Windows

#### 1. Fixed-Size Window
```javascript
// Max sum of subarray of size k
function maxSum(arr, k) {
    let windowSum = 0;
    let maxSum = 0;
    
    // First window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}
```

#### 2. Variable-Size Window
```javascript
// Longest substring without repeating characters
function lengthOfLongestSubstring(s) {
    const set = new Set();
    let left = 0;
    let maxLen = 0;
    
    for (let right = 0; right < s.length; right++) {
        // Shrink window until no duplicates
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        
        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
}
```

### Template for Variable Window
```javascript
function slidingWindow(s) {
    let left = 0;
    let result = 0;
    // Data structure (Map/Set/etc)
    
    for (let right = 0; right < s.length; right++) {
        // Expand: Add s[right] to window
        
        while (/* window is invalid */) {
            // Shrink: Remove s[left] from window
            left++;
        }
        
        // Update result
        result = Math.max(result, right - left + 1);
    }
    
    return result;
}
```

## Key Concepts
- **Two pointers**: `left` and `right` define window boundaries
- **Expand**: Move `right` to include more elements
- **Shrink**: Move `left` to fix invalid window
- **Track state**: Use Map/Set to track window contents

## Key Takeaways
- 
- 
- 

## Mistakes to Avoid
- 
- 
- 
