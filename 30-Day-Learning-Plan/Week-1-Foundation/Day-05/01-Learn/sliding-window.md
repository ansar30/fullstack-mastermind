# Sliding Window Technique - DSA

## What is Sliding Window?

A technique to efficiently solve problems involving subarrays or substrings by maintaining a "window" that slides through the data.

---

## Types of Sliding Window

### 1. Fixed Size Window
Window size is constant.

```javascript
// Maximum sum of k consecutive elements
function maxSum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  
  // First window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  
  // Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}
```

### 2. Variable Size Window
Window size changes based on conditions.

```javascript
// Longest substring without repeating characters
function lengthOfLongestSubstring(s) {
  const charIndex = new Map();
  let maxLength = 0;
  let start = 0;
  
  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    
    if (charIndex.has(char) && charIndex.get(char) >= start) {
      start = charIndex.get(char) + 1;
    }
    
    charIndex.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  
  return maxLength;
}
```

---

## Common Problems

### 1. Maximum Average Subarray
```javascript
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
```

### 2. Minimum Window Substring
```javascript
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
```

---

## When to Use Sliding Window

1. **Subarray/substring problems**
2. **Fixed or variable window size**
3. **Optimization problems** (max/min)
4. **Problems with constraints** (sum, unique chars)

---

## Key Takeaways

1. Fixed window: maintain size, slide by one
2. Variable window: expand/contract based on condition
3. Use two pointers (left, right) for window boundaries
4. Often reduces O(n²) to O(n)
5. Track window state efficiently

