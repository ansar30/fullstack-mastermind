# Day 8 - Learning Notes

## Duplicate Detection Patterns

### Basic Duplicate Detection
```javascript
// Simple duplicate check
const hasDuplicate = arr => new Set(arr).size !== arr.length;
```

### Duplicate Within Range (k distance)
```javascript
// Check if duplicate exists within k distance
function containsNearbyDuplicate(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
}
```

### Cycle Detection with Set
Used in problems like "Happy Number":
1. Track visited values in a Set
2. If we see a value again, there's a cycle
3. If we reach target value, no cycle

### Set Operations
```javascript
// Intersection
const intersection = (arr1, arr2) => {
    const set1 = new Set(arr1);
    return [...new Set(arr2.filter(x => set1.has(x)))];
};

// Union
const union = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

// Difference
const difference = (arr1, arr2) => {
    const set2 = new Set(arr2);
    return arr1.filter(x => !set2.has(x));
};
```

## Key Takeaways
- 
- 
- 

## Mistakes to Avoid
- 
- 
- 
