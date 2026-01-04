# Day 3 - Learning Notes

## Frequency Map Pattern

### When to Use
- Counting occurrences of elements
- Finding duplicates
- Validating anagrams
- Finding most/least frequent elements

### Implementation
```javascript
// Basic frequency map
const freqMap = {};
for (let item of array) {
    freqMap[item] = (freqMap[item] || 0) + 1;
}

// Using Map object
const freqMap = new Map();
for (let item of array) {
    freqMap.set(item, (freqMap.get(item) || 0) + 1);
}
```

### Time & Space Complexity
- Building frequency map: O(n) time, O(k) space (k = unique elements)
- Lookup in map: O(1) average case

## Advanced Techniques

### Boyer-Moore Voting Algorithm
- Find majority element (appears > n/2 times)
- O(n) time, O(1) space
- Two passes: Find candidate, verify candidate

### Bucket Sort for Frequencies
- When you need top K frequent elements
- Create buckets indexed by frequency
- O(n) time complexity

## Key Takeaways
- 
- 
- 

## Mistakes to Avoid
- 
- 
- 
