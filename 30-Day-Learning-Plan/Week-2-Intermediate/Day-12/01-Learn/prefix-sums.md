# Prefix Sums - DSA

## What are Prefix Sums?

A technique that precomputes cumulative sums to answer range sum queries in O(1) time.

### Basic Concept
```javascript
// Original array
[1, 2, 3, 4, 5]

// Prefix sum array
[1, 3, 6, 10, 15]

// Sum from index i to j = prefix[j] - prefix[i-1]
```

---

## Implementation

### Building Prefix Sum
```javascript
function buildPrefixSum(arr) {
  const prefix = [0];
  
  for (let i = 0; i < arr.length; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
  }
  
  return prefix;
}
```

### Range Sum Query
```javascript
function rangeSum(prefix, left, right) {
  return prefix[right + 1] - prefix[left];
}
```

---

## Common Problems

### 1. Range Sum Query
```javascript
class NumArray {
  constructor(nums) {
    this.prefix = [0];
    for (let i = 0; i < nums.length; i++) {
      this.prefix[i + 1] = this.prefix[i] + nums[i];
    }
  }
  
  sumRange(left, right) {
    return this.prefix[right + 1] - this.prefix[left];
  }
}
```

### 2. Subarray Sum Equals K
```javascript
function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1);
  let count = 0;
  let sum = 0;
  
  for (const num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  
  return count;
}
```

---

## Key Takeaways

1. Precompute prefix sums for O(1) range queries
2. Range sum = prefix[right] - prefix[left-1]
3. Useful for subarray sum problems
4. Can combine with hash maps for advanced problems
5. Reduces O(n) queries to O(1)

