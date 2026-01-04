# String Manipulation - DSA

## String Fundamentals

### What are Strings?
A string is a sequence of characters. In JavaScript, strings are immutable.

### Time Complexities:
- Access by index: O(1)
- Search: O(n)
- Concatenation: O(n) - creates new string
- Substring: O(n) - creates new string

---

## Common String Operations

### 1. Reverse String
```javascript
// Method 1: Two Pointers
function reverseString(s) {
  let left = 0, right = s.length - 1;
  const arr = s.split('');
  
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  
  return arr.join('');
}

// Method 2: Built-in
function reverseStringSimple(s) {
  return s.split('').reverse().join('');
}
```

### 2. Check Palindrome
```javascript
function isPalindrome(s) {
  // Remove non-alphanumeric and convert to lowercase
  const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let left = 0, right = cleaned.length - 1;
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}
```

### 3. Anagram Detection
```javascript
// Method 1: Sort and Compare
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  
  return s1.split('').sort().join('') === 
         s2.split('').sort().join('');
}

// Method 2: Character Frequency Map
function isAnagramMap(s1, s2) {
  if (s1.length !== s2.length) return false;
  
  const map = new Map();
  
  // Count characters in s1
  for (const char of s1) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  
  // Decrement for s2
  for (const char of s2) {
    if (!map.has(char) || map.get(char) === 0) {
      return false;
    }
    map.set(char, map.get(char) - 1);
  }
  
  return true;
}
```

---

## String Patterns

### 1. Sliding Window for Substrings
```javascript
// Longest Substring Without Repeating Characters
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

### 2. String Matching
```javascript
// Check if string contains substring
function containsSubstring(str, substr) {
  return str.includes(substr); // O(n*m) worst case
}

// Find all occurrences
function findAllOccurrences(str, substr) {
  const indices = [];
  let index = str.indexOf(substr);
  
  while (index !== -1) {
    indices.push(index);
    index = str.indexOf(substr, index + 1);
  }
  
  return indices;
}
```

---

## Common String Problems

### 1. Valid Anagram
```javascript
function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  
  const count = new Array(26).fill(0);
  
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }
  
  return count.every(c => c === 0);
}
```

### 2. Group Anagrams
```javascript
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
```

### 3. Longest Common Prefix
```javascript
function longestCommonPrefix(strs) {
  if (strs.length === 0) return '';
  
  let prefix = strs[0];
  
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === '') return '';
    }
  }
  
  return prefix;
}
```

---

## Key Takeaways

1. Strings are immutable in JavaScript
2. Two pointers technique works well for string problems
3. Hash maps help with character frequency counting
4. Sorting can help with anagram problems
5. Sliding window is useful for substring problems

