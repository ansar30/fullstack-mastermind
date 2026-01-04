/**
 * Debounce Implementation - Complete Solution
 * 
 * This function demonstrates closures by maintaining
 * a timer reference across multiple function calls.
 */

function debounce(func, delay) {
    let timerId = null; // Closure variable

    return function (...args) {
        // Clear previous timer if it exists
        if (timerId) {
            clearTimeout(timerId);
        }

        // Set new timer
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Real-world example: Search input
const searchAPI = (query) => {
    console.log(`Searching for: "${query}"`);
    // Imagine this makes an API call
};

const debouncedSearch = debounce(searchAPI, 500);

// Simulate user typing
console.log('User starts typing...');
debouncedSearch('j');
setTimeout(() => debouncedSearch('ja'), 100);
setTimeout(() => debouncedSearch('jav'), 200);
setTimeout(() => debouncedSearch('java'), 300);
setTimeout(() => debouncedSearch('javas'), 400);
setTimeout(() => debouncedSearch('javasc'), 500);
setTimeout(() => debouncedSearch('javascr'), 600);
setTimeout(() => debouncedSearch('javascri'), 700);
setTimeout(() => debouncedSearch('javascript'), 800);

// Only "javascript" will be searched, 500ms after last keystroke

/**
 * How Closures Work Here:
 * 
 * 1. `timerId` is defined in debounce's scope
 * 2. The returned function has access to `timerId` (closure)
 * 3. Each call to the debounced function:
 *    - Checks if timerId exists (previous timer)
 *    - Clears it if it does
 *    - Creates a new timer
 * 4. timerId persists between calls because of closure
 * 
 * Benefits:
 * - Reduces API calls
 * - Improves performance
 * - Better user experience
 * - Private state (timerId is not exposed)
 */

// Advanced: Debounce with immediate option
function debounceImmediate(func, delay, immediate = false) {
    let timerId = null;

    return function (...args) {
        const callNow = immediate && !timerId;

        clearTimeout(timerId);

        timerId = setTimeout(() => {
            timerId = null;
            if (!immediate) {
                func.apply(this, args);
            }
        }, delay);

        if (callNow) {
            func.apply(this, args);
        }
    };
}

// Test immediate execution
const immediateDebounce = debounceImmediate(
    () => console.log('Executed immediately!'),
    1000,
    true
);

console.log('\nTesting immediate execution:');
immediateDebounce(); // Executes immediately
immediateDebounce(); // Ignored
immediateDebounce(); // Ignored
