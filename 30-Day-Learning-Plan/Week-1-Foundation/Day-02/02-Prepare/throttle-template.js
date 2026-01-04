/**
 * Throttle Function Template
 * 
 * Task: Implement a throttle function that limits how often
 * a function can be called. Unlike debounce, throttle ensures
 * the function is called at regular intervals.
 * 
 * Requirements:
 * - Must use closures
 * - Should execute function at most once per delay period
 * - Return a throttled version of the function
 * 
 * Example:
 * - If delay is 1000ms and function is called 10 times in 500ms
 * - Function should execute only once (at the first call)
 * - After 1000ms, function can be called again
 */

function throttle(func, delay) {
    // TODO: Implement throttle logic
    // Hint: Track last execution time
    // Hint: Use setTimeout or Date.now()
}

// Example usage:
const handleScroll = throttle(() => {
    console.log('Scroll event handled');
}, 1000);

// Test it:
// window.addEventListener('scroll', handleScroll);
// Should log at most once per second, even with rapid scrolling

