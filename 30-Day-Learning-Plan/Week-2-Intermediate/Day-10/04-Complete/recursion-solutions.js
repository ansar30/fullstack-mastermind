/**
 * Recursion Problems - Complete Solutions
 */

/**
 * Problem 1: Factorial
 * Time: O(n), Space: O(n)
 */
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

/**
 * Problem 2: Fibonacci
 * Time: O(2^n), Space: O(n)
 * Note: Use memoization for better performance
 */
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Optimized with memoization
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

/**
 * Problem 3: Reverse String
 * Time: O(n), Space: O(n)
 */
function reverseString(str) {
    if (str.length <= 1) return str;
    return reverseString(str.slice(1)) + str[0];
}

/**
 * Problem 4: Sum of Array
 * Time: O(n), Space: O(n)
 */
function sumArray(arr, index = 0) {
    if (index === arr.length) return 0;
    return arr[index] + sumArray(arr, index + 1);
}

/**
 * Additional: Power Function
 */
function power(base, exp) {
    if (exp === 0) return 1;
    if (exp === 1) return base;
    return base * power(base, exp - 1);
}

/**
 * Additional: Count Digits
 */
function countDigits(n) {
    if (n < 10) return 1;
    return 1 + countDigits(Math.floor(n / 10));
}

// Test cases
console.log('Factorial:', factorial(5)); // 120
console.log('Fibonacci:', fibonacci(7)); // 13
console.log('Fibonacci Memo:', fibonacciMemo(7)); // 13
console.log('Reverse:', reverseString("hello")); // "olleh"
console.log('Sum:', sumArray([1, 2, 3, 4, 5])); // 15
console.log('Power:', power(2, 8)); // 256
console.log('Count Digits:', countDigits(12345)); // 5

