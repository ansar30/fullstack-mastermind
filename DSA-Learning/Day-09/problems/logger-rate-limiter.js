/**
 * Problem: Logger Rate Limiter
 * 
 * Design a logger that receives a stream of messages along with their timestamps.
 * Each unique message should only be printed at most every 10 seconds.
 * 
 * Example:
 * logger.shouldPrintMessage(1, "foo") → true
 * logger.shouldPrintMessage(2, "bar") → true
 * logger.shouldPrintMessage(3, "foo") → false (too soon, printed at 1)
 * logger.shouldPrintMessage(8, "bar") → false (too soon, printed at 2)
 * logger.shouldPrintMessage(10, "foo") → false (too soon, needs to be ≥ 11)
 * logger.shouldPrintMessage(11, "foo") → true (exactly 10 seconds since 1)
 * 
 * shouldPrintMessage returns true if the message should be printed, false otherwise.
 */

class Logger {
    constructor() {
        // Your initialization here

    }

    shouldPrintMessage(timestamp, message) {
        // Your solution here

    }
}

// Test cases
const logger = new Logger();
console.log(logger.shouldPrintMessage(1, "foo")); // Expected: true
console.log(logger.shouldPrintMessage(2, "bar")); // Expected: true
console.log(logger.shouldPrintMessage(3, "foo")); // Expected: false
console.log(logger.shouldPrintMessage(8, "bar")); // Expected: false
console.log(logger.shouldPrintMessage(10, "foo")); // Expected: false
console.log(logger.shouldPrintMessage(11, "foo")); // Expected: true

module.exports = Logger;
