/**
 * Prefix Sums Problems - Complete Solutions
 */

/**
 * Problem 1: Range Sum Query
 * Time: O(1) per query, O(n) construction
 * Space: O(n)
 */
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

/**
 * Problem 2: Subarray Sum Equals K
 * Time: O(n), Space: O(n)
 */
function subarraySum(nums, k) {
    const map = new Map();
    map.set(0, 1); // Empty subarray
    let count = 0;
    let sum = 0;
    
    for (const num of nums) {
        sum += num;
        
        // If (sum - k) exists, we found subarray(s)
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        
        // Store current prefix sum
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return count;
}

/**
 * Additional: Product of Array Except Self
 * Time: O(n), Space: O(1) excluding output array
 */
function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    
    // Left products
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    
    // Right products
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    
    return result;
}

// Test cases
const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log('Range Sum (0,2):', numArray.sumRange(0, 2)); // 1
console.log('Range Sum (2,5):', numArray.sumRange(2, 5)); // -1
console.log('Subarray Sum:', subarraySum([1,1,1], 2)); // 2
console.log('Product Except Self:', productExceptSelf([1,2,3,4])); // [24,12,8,6]

