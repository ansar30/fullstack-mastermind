# Arrays Basics - DSA

## Array Fundamentals

### What is an Array?
A linear data structure that stores elements in contiguous memory locations.

### Time Complexities:
- Access by index: O(1)
- Search: O(n)
- Insert at end: O(1) amortized
- Insert at beginning: O(n)
- Delete: O(n)

---

## Common Array Patterns

### 1. Two Pointers
Use two indices to traverse array efficiently.

```javascript
// Example: Check if palindrome
function isPalindrome(arr) {
  let left = 0, right = arr.length - 1;
  
  while (left < right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  
  return true;
}
```

### 2. Hash Map for O(1) Lookup
Store elements in a map for constant-time access.

```javascript
// Two Sum pattern
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
```

### 3. Sliding Window
Maintain a window that slides through the array.

```javascript
// Maximum sum of k consecutive elements
function maxSum(arr, k) {
  let maxSum = 0, windowSum = 0;
  
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

---

## Two Sum Problem

### Problem Statement
Given an array of integers and a target, return indices of two numbers that add up to the target.

### Approaches:

#### Brute Force - O(n²)
```javascript
function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
```

#### Optimized - O(n) using Hash Map
```javascript
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
```

---

## Key Takeaways

1. Arrays provide O(1) random access
2. Hash maps enable O(n) solutions for many problems
3. Two pointers reduce space complexity
4. Always consider trade-offs: time vs space
