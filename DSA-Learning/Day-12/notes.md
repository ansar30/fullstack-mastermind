# Day 12 - Learning Notes

## Kadane's Algorithm

### Maximum Subarray Sum
One of the most elegant algorithms in computer science!

```javascript
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        // Either extend current subarray or start new one
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}
// Time: O(n), Space: O(1)
```

### Why it Works
At each position, we decide:
- Start a new subarray from current element
- OR extend the existing subarray

If `currentSum` becomes negative, it's better to start fresh!

### Variations

#### Maximum Circular Subarray
```javascript
function maxSubarraySumCircular(nums) {
    // Case 1: Normal Kadane's
    const normalMax = kadane(nums);
    
    // Case 2: Circular - total - minimum subarray
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        nums[i] = -nums[i]; // Invert
    }
    
    const circularMax = total + kadane(nums);
    
    // If all negative, return normal max
    return circularMax === 0 ? normalMax : Math.max(normalMax, circularMax);
}
```

## Fixed Window Maximum Sum

```javascript
function maxSumFixedWindow(arr, k) {
    let windowSum = 0;
    
    // First window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    let maxSum = windowSum;
    
    // Slide window
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}
```

## Key Takeaways
- 
- 
- 

## Mistakes to Avoid
- 
- 
- 
