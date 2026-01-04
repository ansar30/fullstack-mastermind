/**
 * Two Pointers Problems - Complete Solutions
 */

/**
 * Problem 1: Valid Palindrome
 * Time: O(n), Space: O(1)
 */
function isPalindrome(s) {
    // Remove non-alphanumeric and convert to lowercase
    const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

/**
 * Problem 2: Two Sum II (Sorted Array)
 * Time: O(n), Space: O(1)
 */
function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            return [left + 1, right + 1]; // 1-indexed
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [];
}

/**
 * Problem 3: Container With Most Water
 * Time: O(n), Space: O(1)
 */
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    
    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const area = width * minHeight;
        
        maxArea = Math.max(maxArea, area);
        
        // Move pointer with smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
}

/**
 * Problem 4: Trapping Rain Water
 * Time: O(n), Space: O(1)
 */
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

/**
 * Problem 5: Remove Duplicates from Sorted Array
 * Time: O(n), Space: O(1)
 */
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    
    let slow = 0;
    
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    
    return slow + 1;
}

// Test cases
console.log('Palindrome:', isPalindrome("A man, a plan, a canal: Panama")); // true
console.log('Two Sum:', twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log('Max Area:', maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log('Trap Water:', trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log('Remove Duplicates:', removeDuplicates([1,1,2])); // 2

