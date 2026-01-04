/**
 * Middleware Template
 * 
 * Task: Implement custom middleware for logging and timing
 * 
 * Requirements:
 * - Logging middleware: Log request method, path, timestamp
 * - Timing middleware: Measure request processing time
 * - Both should call next() to continue
 */

const express = require('express');
const app = express();

// TODO: Implement logging middleware
function loggerMiddleware(req, res, next) {
    // Log: method, path, timestamp
    // Call next()
}

// TODO: Implement timing middleware
function timingMiddleware(req, res, next) {
    // Record start time
    // After response, calculate duration
    // Log duration
    // Call next()
}

// Usage
app.use(loggerMiddleware);
app.use(timingMiddleware);

app.get('/', (req, res) => {
    res.json({ message: 'Hello' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

