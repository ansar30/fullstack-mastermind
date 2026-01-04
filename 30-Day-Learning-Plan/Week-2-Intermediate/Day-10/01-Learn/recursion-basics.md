# Recursion Basics - DSA

## What is Recursion?

A function that calls itself to solve a problem by breaking it into smaller subproblems.

### Structure
```javascript
function recursiveFunction(n) {
  // Base case - stops recursion
  if (n === 0) {
    return 1;
  }
  
  // Recursive case - calls itself
  return n * recursiveFunction(n - 1);
}
```

---

## Key Components

### 1. Base Case
The condition that stops recursion:
```javascript
if (n <= 1) return n; // Base case
```

### 2. Recursive Case
The part that calls the function again:
```javascript
return n * factorial(n - 1); // Recursive case
```

---

## Common Patterns

### 1. Factorial
```javascript
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

### 2. Fibonacci
```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### 3. Sum of Array
```javascript
function sumArray(arr, index = 0) {
  if (index === arr.length) return 0;
  return arr[index] + sumArray(arr, index + 1);
}
```

---

## Recursion vs Iteration

### When to Use Recursion
- Tree/graph traversal
- Divide and conquer
- Backtracking
- Natural recursive structure

### When to Use Iteration
- Simple loops
- Performance critical
- Stack overflow risk
- Tail recursion (use iteration)

---

## Common Problems

### 1. Reverse String
```javascript
function reverseString(str) {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}
```

### 2. Power Function
```javascript
function power(base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  return base * power(base, exp - 1);
}
```

### 3. Count Digits
```javascript
function countDigits(n) {
  if (n < 10) return 1;
  return 1 + countDigits(Math.floor(n / 10));
}
```

---

## Key Takeaways

1. Always have a base case
2. Recursive case should approach base case
3. Each call should work on smaller problem
4. Consider stack overflow for deep recursion
5. Use memoization to optimize repeated calls

