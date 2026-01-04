/**
 * Throttle Implementation - Complete Solution
 * 
 * Throttle ensures a function is called at most once per delay period.
 * Unlike debounce, throttle executes immediately and then limits subsequent calls.
 */

function throttle(func, delay) {
    let lastExecTime = 0;
    let timeoutId = null;

    return function (...args) {
        const currentTime = Date.now();
        const timeSinceLastExec = currentTime - lastExecTime;

        // If enough time has passed, execute immediately
        if (timeSinceLastExec >= delay) {
            lastExecTime = currentTime;
            func.apply(this, args);
        } else {
            // Clear any pending execution
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            // Schedule execution for when delay period ends
            const remainingTime = delay - timeSinceLastExec;
            timeoutId = setTimeout(() => {
                lastExecTime = Date.now();
                func.apply(this, args);
                timeoutId = null;
            }, remainingTime);
        }
    };
}

// Real-world example: Scroll event throttling
const handleScroll = throttle(() => {
    console.log('Handling scroll event');
    // Imagine this updates scroll position indicator
}, 200);

// window.addEventListener('scroll', handleScroll);

/**
 * Alternative Implementation: Leading Edge Throttle
 * Executes immediately on first call, then ignores until delay passes
 */
function throttleLeading(func, delay) {
    let lastExecTime = 0;

    return function (...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime >= delay) {
            lastExecTime = currentTime;
            func.apply(this, args);
        }
    };
}

/**
 * Alternative Implementation: Trailing Edge Throttle
 * Executes at the end of delay period
 */
function throttleTrailing(func, delay) {
    let timeoutId = null;
    let lastArgs = null;

    return function (...args) {
        lastArgs = args;

        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                func.apply(this, lastArgs);
                timeoutId = null;
                lastArgs = null;
            }, delay);
        }
    };
}

// Test
console.log('Testing throttle...');
const log = (msg) => console.log(`[${Date.now()}] ${msg}`);
const throttledLog = throttle(log, 1000);

throttledLog('Call 1'); // Executes immediately
setTimeout(() => throttledLog('Call 2'), 200);  // Ignored
setTimeout(() => throttledLog('Call 3'), 400);  // Ignored
setTimeout(() => throttledLog('Call 4'), 1200); // Executes (1s after Call 1)

/**
 * Key Differences: Throttle vs Debounce
 * 
 * Debounce:
 * - Waits for pause in calls
 * - Executes after delay when calls stop
 * - Good for: Search input, resize events
 * 
 * Throttle:
 * - Executes at regular intervals
 * - Limits execution frequency
 * - Good for: Scroll events, mouse move, API rate limiting
 */

