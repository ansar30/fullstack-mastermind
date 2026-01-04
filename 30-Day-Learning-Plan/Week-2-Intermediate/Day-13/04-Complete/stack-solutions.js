/**
 * Stack Problems - Complete Solutions
 */

/**
 * Problem 1: Valid Parentheses
 * Time: O(n), Space: O(n)
 */
function isValid(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (const char of s) {
        if (pairs[char]) {
            // Opening bracket
            stack.push(char);
        } else {
            // Closing bracket
            if (stack.length === 0 || pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

/**
 * Problem 2: Daily Temperatures
 * Time: O(n), Space: O(n)
 */
function dailyTemperatures(temperatures) {
    const stack = [];
    const result = new Array(temperatures.length).fill(0);
    
    for (let i = 0; i < temperatures.length; i++) {
        // Pop until current temp is not greater
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }
    
    return result;
}

/**
 * Problem 3: Next Greater Element
 * Time: O(n), Space: O(n)
 */
function nextGreaterElement(nums) {
    const stack = [];
    const result = new Array(nums.length).fill(-1);
    
    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
            const index = stack.pop();
            result[index] = nums[i];
        }
        stack.push(i);
    }
    
    return result;
}

/**
 * Additional: Largest Rectangle in Histogram
 * Time: O(n), Space: O(n)
 */
function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
    
    for (let i = 0; i <= heights.length; i++) {
        const h = i === heights.length ? 0 : heights[i];
        
        while (stack.length > 0 && h < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        
        stack.push(i);
    }
    
    return maxArea;
}

/**
 * Additional: Min Stack
 * Stack that supports push, pop, top, and getMin in O(1)
 */
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    
    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }
    
    pop() {
        const val = this.stack.pop();
        if (val === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return val;
    }
    
    top() {
        return this.stack[this.stack.length - 1];
    }
    
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Test cases
console.log('Valid Parentheses:', isValid("()[]{}")); // true
console.log('Valid Parentheses:', isValid("([)]")); // false
console.log('Daily Temperatures:', dailyTemperatures([73,74,75,71,69,72,76,73])); 
// [1,1,4,2,1,1,0,0]
console.log('Next Greater:', nextGreaterElement([4,5,2,10])); // [5,10,10,-1]
console.log('Largest Rectangle:', largestRectangleArea([2,1,5,6,2,3])); // 10

