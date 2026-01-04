/**
 * Throttle Implementation Challenge
 * 
 * Implement a throttle function that:
 * 1. Limits function execution frequency
 * 2. Executes immediately on first call
 * 3. Then executes at most once per delay period
 * 4. Uses closures to maintain state
 */

function throttle(func, delay) {
    // TODO: Implement here
}

// Test your implementation
const log = (msg) => console.log(`[${new Date().toISOString()}] ${msg}`);

const throttledLog = throttle(log, 2000);

// Simulate rapid calls
console.log('Starting throttle test...');
throttledLog('Call 1'); // Should execute immediately
setTimeout(() => throttledLog('Call 2'), 500);  // Should be ignored
setTimeout(() => throttledLog('Call 3'), 1000); // Should be ignored
setTimeout(() => throttledLog('Call 4'), 2000); // Should execute (2s after Call 1)
setTimeout(() => throttledLog('Call 5'), 2500); // Should be ignored
setTimeout(() => throttledLog('Call 6'), 4000); // Should execute (2s after Call 4)

// Expected: Only "Call 1", "Call 4", and "Call 6" should log

