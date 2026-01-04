# HashMap and Set Advanced - DSA

## Advanced HashMap Patterns

### 1. Grouping with Multiple Keys
```javascript
function groupByMultiple(arr, keyFn1, keyFn2) {
  const map = new Map();
  
  for (const item of arr) {
    const key1 = keyFn1(item);
    const key2 = keyFn2(item);
    const compositeKey = `${key1}-${key2}`;
    
    if (!map.has(compositeKey)) {
      map.set(compositeKey, []);
    }
    map.get(compositeKey).push(item);
  }
  
  return map;
}
```

### 2. Frequency with Conditions
```javascript
function countWithCondition(arr, condition) {
  const map = new Map();
  
  for (const item of arr) {
    if (condition(item)) {
      map.set(item, (map.get(item) || 0) + 1);
    }
  }
  
  return map;
}
```

---

## Set Operations

### Basic Set Operations
```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

// Union
const union = new Set([...set1, ...set2]);

// Intersection
const intersection = new Set([...set1].filter(x => set2.has(x)));

// Difference
const difference = new Set([...set1].filter(x => !set2.has(x)));
```

### Set for Duplicate Detection
```javascript
function hasDuplicates(arr) {
  const seen = new Set();
  for (const item of arr) {
    if (seen.has(item)) return true;
    seen.add(item);
  }
  return false;
}
```

---

## Common Problems

### 1. Longest Consecutive Sequence
```javascript
function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let longest = 0;
  
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let current = num;
      let length = 1;
      
      while (numSet.has(current + 1)) {
        current++;
        length++;
      }
      
      longest = Math.max(longest, length);
    }
  }
  
  return longest;
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

1. Sets are perfect for uniqueness checks
2. HashMaps track frequencies and relationships
3. Use prefix sums with HashMaps for subarray problems
4. Sets enable O(1) membership testing
5. Combine patterns for complex problems

