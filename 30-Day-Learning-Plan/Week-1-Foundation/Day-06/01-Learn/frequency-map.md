# Frequency Map Problems - DSA

## What is Frequency Map?

A technique using hash maps to count occurrences of elements, characters, or patterns.

---

## Common Patterns

### 1. Character Frequency
```javascript
function countChars(str) {
  const freq = new Map();
  for (const char of str) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  return freq;
}
```

### 2. Element Frequency
```javascript
function countElements(arr) {
  const freq = new Map();
  for (const elem of arr) {
    freq.set(elem, (freq.get(elem) || 0) + 1);
  }
  return freq;
}
```

---

## Common Problems

### 1. Find All Anagrams
```javascript
function findAnagrams(s, p) {
  const result = [];
  const pFreq = new Map();
  
  // Count frequency of pattern
  for (const char of p) {
    pFreq.set(char, (pFreq.get(char) || 0) + 1);
  }
  
  let left = 0;
  const windowFreq = new Map();
  
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    windowFreq.set(char, (windowFreq.get(char) || 0) + 1);
    
    // Shrink window if too large
    if (right - left + 1 > p.length) {
      const leftChar = s[left];
      windowFreq.set(leftChar, windowFreq.get(leftChar) - 1);
      if (windowFreq.get(leftChar) === 0) {
        windowFreq.delete(leftChar);
      }
      left++;
    }
    
    // Check if window is anagram
    if (right - left + 1 === p.length) {
      if (mapsEqual(windowFreq, pFreq)) {
        result.push(left);
      }
    }
  }
  
  return result;
}

function mapsEqual(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (const [key, value] of map1) {
    if (map2.get(key) !== value) return false;
  }
  return true;
}
```

### 2. Top K Frequent Elements
```javascript
function topKFrequent(nums, k) {
  const freq = new Map();
  
  // Count frequency
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  
  // Sort by frequency
  const sorted = Array.from(freq.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(entry => entry[0]);
  
  return sorted;
}
```

---

## Key Takeaways

1. Use Map for frequency counting
2. Sliding window + frequency map for substring problems
3. Sort frequency map for top K problems
4. Compare frequency maps for anagram problems
5. Efficient for character/element counting

