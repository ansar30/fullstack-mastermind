# Coding Challenges - Complete Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Data Structures](#data-structures)
3. [Algorithm Patterns](#algorithm-patterns)
4. [Problem-Solving Strategy](#problem-solving-strategy)
5. [Common Problems](#common-problems)
6. [Practice Resources](#practice-resources)

---

## Introduction

Coding challenges test your problem-solving abilities, algorithmic thinking, and code quality.

### What Interviewers Look For
- **Problem-solving approach** - How you think through problems
- **Code quality** - Clean, readable, maintainable code
- **Communication** - Explaining your thought process
- **Edge cases** - Considering all scenarios
- **Time/Space complexity** - Understanding performance

### Interview Tips
1. **Ask clarifying questions** - Understand the problem fully
2. **Think out loud** - Share your thought process
3. **Start with brute force** - Then optimize
4. **Test your code** - Walk through examples
5. **Discuss trade-offs** - Time vs space, readability vs performance

---

## Data Structures

### Arrays

**Common Operations:**
```javascript
// Initialize
const arr = [1, 2, 3, 4, 5];

// Access - O(1)
const first = arr[0];

// Insert at end - O(1)
arr.push(6);

// Insert at beginning - O(n)
arr.unshift(0);

// Remove from end - O(1)
arr.pop();

// Remove from beginning - O(n)
arr.shift();

// Slice - O(n)
const subArr = arr.slice(1, 3);

// Splice - O(n)
arr.splice(2, 1); // Remove 1 element at index 2

// Search - O(n)
const index = arr.indexOf(3);
```

**Common Patterns:**
```javascript
// Two Pointers
function isPalindrome(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

// Sliding Window
function maxSumSubarray(arr, k) {
    let maxSum = 0, windowSum = 0;
    
    // Calculate first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

// Prefix Sum
function rangeSum(arr, queries) {
    // Build prefix sum array
    const prefix = [0];
    for (let i = 0; i < arr.length; i++) {
        prefix.push(prefix[i] + arr[i]);
    }
    
    // Answer queries in O(1)
    return queries.map(([left, right]) => 
        prefix[right + 1] - prefix[left]
    );
}
```

---

### Strings

**Common Operations:**
```javascript
const str = "Hello World";

// Length
str.length; // 11

// Character at index
str[0]; // 'H'
str.charAt(0); // 'H'

// Substring
str.substring(0, 5); // 'Hello'
str.slice(0, 5); // 'Hello'

// Search
str.indexOf('World'); // 6
str.includes('World'); // true

// Split
str.split(' '); // ['Hello', 'World']

// Replace
str.replace('World', 'JavaScript'); // 'Hello JavaScript'

// Case
str.toLowerCase(); // 'hello world'
str.toUpperCase(); // 'HELLO WORLD'
```

**Common Problems:**
```javascript
// Reverse String
function reverseString(s) {
    return s.split('').reverse().join('');
    // Or in-place:
    const arr = s.split('');
    let left = 0, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr.join('');
}

// Check Anagram
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    
    const count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    
    return true;
}

// First Non-Repeating Character
function firstUniqChar(s) {
    const count = {};
    
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) return i;
    }
    
    return -1;
}
```

---

### Hash Tables (Objects/Maps)

**When to Use:**
- Fast lookups O(1)
- Counting frequencies
- Detecting duplicates
- Caching results

```javascript
// Frequency Counter Pattern
function charFrequency(str) {
    const freq = {};
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}

// Two Sum Problem
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

// Group Anagrams
function groupAnagrams(strs) {
    const map = new Map();
    
    for (let str of strs) {
        const key = str.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    
    return Array.from(map.values());
}
```

---

### Linked Lists

```javascript
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Reverse Linked List
function reverseList(head) {
    let prev = null;
    let curr = head;
    
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;
}

// Detect Cycle (Floyd's Algorithm)
function hasCycle(head) {
    let slow = head, fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) return true;
    }
    
    return false;
}

// Merge Two Sorted Lists
function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let curr = dummy;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    
    curr.next = l1 || l2;
    return dummy.next;
}
```

---

### Stacks and Queues

**Stack (LIFO):**
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
}

// Valid Parentheses
function isValid(s) {
    const stack = [];
    const map = { '(': ')', '[': ']', '{': '}' };
    
    for (let char of s) {
        if (char in map) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (map[last] !== char) return false;
        }
    }
    
    return stack.length === 0;
}
```

**Queue (FIFO):**
```javascript
class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(item) {
        this.items.push(item);
    }
    
    dequeue() {
        return this.items.shift();
    }
    
    peek() {
        return this.items[0];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
}
```

---

### Trees

```javascript
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Tree Traversals
function inorderTraversal(root) {
    const result = [];
    
    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }
    
    traverse(root);
    return result;
}

// Max Depth
function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// Level Order Traversal (BFS)
function levelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length) {
        const level = [];
        const levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            level.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(level);
    }
    
    return result;
}

// Validate BST
function isValidBST(root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    
    if (root.val <= min || root.val >= max) return false;
    
    return isValidBST(root.left, min, root.val) &&
           isValidBST(root.right, root.val, max);
}
```

---

## Algorithm Patterns

### 1. Two Pointers

Used for: Arrays, strings, linked lists

```javascript
// Remove Duplicates from Sorted Array
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

// Container With Most Water
function maxArea(height) {
    let maxArea = 0;
    let left = 0, right = height.length - 1;
    
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

### 2. Sliding Window

Used for: Subarrays, substrings

```javascript
// Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    const set = new Set();
    let left = 0, maxLen = 0;
    
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
}

// Minimum Window Substring
function minWindow(s, t) {
    const need = {};
    for (let char of t) {
        need[char] = (need[char] || 0) + 1;
    }
    
    const window = {};
    let left = 0, right = 0;
    let valid = 0;
    let start = 0, minLen = Infinity;
    
    while (right < s.length) {
        const c = s[right];
        right++;
        
        if (need[c]) {
            window[c] = (window[c] || 0) + 1;
            if (window[c] === need[c]) valid++;
        }
        
        while (valid === Object.keys(need).length) {
            if (right - left < minLen) {
                start = left;
                minLen = right - left;
            }
            
            const d = s[left];
            left++;
            
            if (need[d]) {
                if (window[d] === need[d]) valid--;
                window[d]--;
            }
        }
    }
    
    return minLen === Infinity ? '' : s.substring(start, start + minLen);
}
```

### 3. Fast & Slow Pointers

Used for: Linked lists, cycle detection

```javascript
// Find Middle of Linked List
function middleNode(head) {
    let slow = head, fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}

// Happy Number
function isHappy(n) {
    function getNext(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }
    
    let slow = n, fast = getNext(n);
    
    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    
    return fast === 1;
}
```

### 4. Merge Intervals

```javascript
// Merge Intervals
function merge(intervals) {
    if (intervals.length <= 1) return intervals;
    
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const last = result[result.length - 1];
        const curr = intervals[i];
        
        if (curr[0] <= last[1]) {
            last[1] = Math.max(last[1], curr[1]);
        } else {
            result.push(curr);
        }
    }
    
    return result;
}

// Insert Interval
function insert(intervals, newInterval) {
    const result = [];
    let i = 0;
    
    // Add intervals before newInterval
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    
    // Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);
    
    // Add remaining intervals
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }
    
    return result;
}
```

### 5. Binary Search

```javascript
// Classic Binary Search
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// Find First and Last Position
function searchRange(nums, target) {
    function findBound(isFirst) {
        let left = 0, right = nums.length - 1;
        let bound = -1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (nums[mid] === target) {
                bound = mid;
                if (isFirst) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return bound;
    }
    
    return [findBound(true), findBound(false)];
}
```

---

## Problem-Solving Strategy

### Step 1: Understand the Problem
- Read carefully
- Ask clarifying questions
- Understand input/output
- Identify constraints

### Step 2: Examples
- Work through examples
- Include edge cases
- Think about invalid inputs

### Step 3: Break It Down
- Pseudo-code
- Identify sub-problems
- Think about data structures

### Step 4: Solve/Simplify
- Start with brute force
- Optimize later
- Handle simpler version first

### Step 5: Look Back and Refactor
- Can you improve time/space complexity?
- Is code readable?
- Handle all edge cases?

---

## Common Problems

### Easy Level

**1. Reverse Integer**
```javascript
function reverse(x) {
    const sign = x < 0 ? -1 : 1;
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
    return (reversed < -2**31 || reversed > 2**31 - 1) ? 0 : reversed;
}
```

**2. Fizz Buzz**
```javascript
function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push('FizzBuzz');
        else if (i % 3 === 0) result.push('Fizz');
        else if (i % 5 === 0) result.push('Buzz');
        else result.push(i.toString());
    }
    return result;
}
```

**3. Valid Palindrome**
```javascript
function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return s === s.split('').reverse().join('');
}
```

### Medium Level

**1. Product of Array Except Self**
```javascript
function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n);
    
    // Left pass
    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    
    // Right pass
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    
    return result;
}
```

**2. 3Sum**
```javascript
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1, right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
}
```

---

## Practice Resources

### Platforms
- **LeetCode** - Most popular, company-specific questions
- **HackerRank** - Good for beginners
- **CodeWars** - Daily practice
- **AlgoExpert** - Curated problems with video solutions

### Study Plan
**Week 1-2:** Arrays and Strings (Easy)
**Week 3-4:** Hash Tables and Two Pointers (Easy/Medium)
**Week 5-6:** Linked Lists and Stacks (Medium)
**Week 7-8:** Trees and Graphs (Medium)
**Week 9-10:** Dynamic Programming (Medium/Hard)

### Daily Practice
- **Beginner:** 1 easy problem
- **Intermediate:** 1 medium problem
- **Advanced:** 1 medium + 1 hard problem

---

**Key Takeaway:** Consistent practice is more important than speed. Focus on understanding patterns and improving problem-solving skills!

