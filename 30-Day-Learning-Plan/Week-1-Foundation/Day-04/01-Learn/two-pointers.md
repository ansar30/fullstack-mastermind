# Two Pointers Technique - DSA

## What is Two Pointers?

A technique using two pointers (indices) to traverse an array or string, often reducing time complexity from O(n²) to O(n).

---

## Common Patterns

### 1. Opposite Ends (Converging)
Two pointers start at opposite ends and move toward each other.

```javascript
// Check if array is palindrome
function isPalindrome(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}
```

### 2. Same Direction (Fast & Slow)
Two pointers move in the same direction at different speeds.

```javascript
// Remove duplicates from sorted array
function removeDuplicates(nums) {
  let slow = 0;
  
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  
  return slow + 1;
}
```

### 3. Sliding Window
Two pointers maintain a window of elements.

```javascript
// Maximum sum of k consecutive elements
function maxSum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  
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

## Classic Problems

### 1. Two Sum (Sorted Array)
```javascript
function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    const sum = nums[left] + nums[right];
    
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return [];
}
```

### 2. Container With Most Water
```javascript
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxArea;
}
```

### 3. Trapping Rain Water
```javascript
function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;
  
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }
  
  return water;
}
```

---

## When to Use Two Pointers

1. **Sorted arrays**: Often indicates two pointers
2. **Palindrome problems**: Check from both ends
3. **Pair sum problems**: Find pairs efficiently
4. **Removing duplicates**: Fast and slow pointers
5. **Subarray problems**: Sliding window variant

---

## Key Takeaways

1. Two pointers reduce O(n²) to O(n)
2. Converging pointers for sorted arrays
3. Fast/slow pointers for linked lists
4. Sliding window for subarray problems
5. Always consider edge cases (empty, single element)

