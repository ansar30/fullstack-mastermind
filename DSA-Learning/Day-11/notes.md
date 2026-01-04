# Day 11 - Learning Notes

## Subarray Sum Patterns

### Prefix Sum Technique
Prefix sum helps solve subarray sum problems efficiently.

```javascript
// Build prefix sum array
function prefixSum(arr) {
    const prefix = [0];
    for (let i = 0; i < arr.length; i++) {
        prefix[i + 1] = prefix[i] + arr[i];
    }
    return prefix;
}

// Sum of subarray [i, j] = prefix[j+1] - prefix[i]
```

### Subarray Sum Equals K
Using prefix sum + hash map:

```javascript
function subarraySum(nums, k) {
    const map = new Map();
    map.set(0, 1); // Important: sum 0 has 1 occurrence
    
    let sum = 0;
    let count = 0;
    
    for (let num of nums) {
        sum += num;
        
        // If (sum - k) exists, we found subarrays
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return count;
}
// Time: O(n), Space: O(n)
```

### Fixed-Size Sliding Window
For max/min in fixed size k:

```javascript
function maxAverage(nums, k) {
    let sum = 0;
    
    // First window
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    
    let maxSum = sum;
    
    // Slide window
    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, sum);
    }
    
    return maxSum / k;
}
```

### Modulo Trick for Multiples
If we want subarray sum that's multiple of k:
- Use prefix sum modulo k
- If same remainder appears twice, subarray between them is multiple of k

## Key Takeaways
- 
- 
- 

## Mistakes to Avoid
- 
- 
- 
