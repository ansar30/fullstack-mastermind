/**
 * Debounce Implementation Challenge
 * 
 * Implement a debounce function that:
 * 1. Delays function execution
 * 2. Cancels previous pending executions
 * 3. Uses closures to maintain state
 */

function debounce(func, delay) {
    // TODO: Implement here
}

// Test your implementation
const log = (msg) => console.log(`[${new Date().toISOString()}] ${msg}`);

const debouncedLog = debounce(log, 1000);

// Simulate rapid calls
debouncedLog('Call 1'); // Should be cancelled
setTimeout(() => debouncedLog('Call 2'), 100); // Should be cancelled
setTimeout(() => debouncedLog('Call 3'), 200); // Should be cancelled
setTimeout(() => debouncedLog('Call 4'), 300); // Should execute after 1000ms

// Expected: Only "Call 4" logs, approximately 1300ms after start
