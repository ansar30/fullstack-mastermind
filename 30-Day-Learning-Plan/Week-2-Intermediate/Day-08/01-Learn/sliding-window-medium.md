# Sliding Window Medium Problems - DSA

## Advanced Sliding Window Patterns

### Variable Window with Constraints
```javascript
// Minimum Window Substring
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
    const c = s[right++];
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) valid++;
    }
    
    while (valid === need.size) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      const d = s[left++];
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--;
        window.set(d, window.get(d) - 1);
      }
    }
  }
  
  return len === Infinity ? '' : s.substring(start, start + len);
}
```

### Sliding Window with Two Pointers
```javascript
// Longest Repeating Character Replacement
function characterReplacement(s, k) {
  const count = new Map();
  let maxCount = 0;
  let maxLength = 0;
  let left = 0;
  
  for (let right = 0; right < s.length; right++) {
    count.set(s[right], (count.get(s[right]) || 0) + 1);
    maxCount = Math.max(maxCount, count.get(s[right]));
    
    if (right - left + 1 - maxCount > k) {
      count.set(s[left], count.get(s[left]) - 1);
      left++;
    }
    
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}
```

---

## Key Takeaways

1. Variable windows adjust based on constraints
2. Track window state efficiently
3. Expand right, contract left
4. Use maps for character counting
5. Optimize for O(n) time complexity

