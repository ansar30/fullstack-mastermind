/**
 * Two Sum - Optimized Solution
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

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

// Test cases
console.log('Test 1:', twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log('Test 2:', twoSum([3, 2, 4], 6));      // [1, 2]
console.log('Test 3:', twoSum([3, 3], 6));         // [0, 1]
console.log('Test 4:', twoSum([-1, -2, -3, -4, -5], -8)); // [2, 4]

/**
 * Explanation:
 * 
 * 1. We iterate through the array once
 * 2. For each number, we calculate its complement (target - current number)
 * 3. We check if the complement exists in our hash map
 * 4. If yes, we found our pair and return indices
 * 5. If no, we add current number and its index to the map
 * 6. This ensures we check each pair only once
 * 
 * Why O(n)?
 * - Single loop through array: O(n)
 * - Hash map operations (get/set): O(1)
 * - Total: O(n)
 */
