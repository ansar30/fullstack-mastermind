# Stack Data Structure - DSA

## What is a Stack?

A LIFO (Last In, First Out) data structure. Elements are added and removed from the top.

### Operations
- **push**: Add element to top
- **pop**: Remove element from top
- **peek/top**: View top element
- **isEmpty**: Check if empty
- **size**: Get number of elements

---

## Implementation

### Array-Based Stack
```javascript
class Stack {
  constructor() {
    this.items = [];
  }
  
  push(item) {
    this.items.push(item);
  }
  
  pop() {
    return this.items.pop();
  }
  
  peek() {
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
}
```

---

## Common Problems

### 1. Valid Parentheses
```javascript
function isValid(s) {
  const stack = [];
  const pairs = { '(': ')', '[': ']', '{': '}' };
  
  for (const char of s) {
    if (pairs[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0 || pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
```

### 2. Daily Temperatures
```javascript
function dailyTemperatures(temperatures) {
  const stack = [];
  const result = new Array(temperatures.length).fill(0);
  
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = i - index;
    }
    stack.push(i);
  }
  
  return result;
}
```

### 3. Largest Rectangle in Histogram
```javascript
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
```

---

## Key Takeaways

1. Stack is LIFO structure
2. Perfect for matching/balancing problems
3. Monotonic stack for next greater/smaller
4. Use for expression evaluation
5. Implement with array or linked list

