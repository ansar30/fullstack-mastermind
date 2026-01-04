/**
 * Custom Middleware - Complete Solution
 */

const express = require('express');
const app = express();

// Logging Middleware
function loggerMiddleware(req, res, next) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.path}`);
    next();
}

// Timing Middleware
function timingMiddleware(req, res, next) {
    const startTime = Date.now();
    
    // Override res.end to capture response time
    const originalEnd = res.end;
    res.end = function(...args) {
        const duration = Date.now() - startTime;
        console.log(`Request took ${duration}ms`);
        originalEnd.apply(this, args);
    };
    
    next();
}

// Alternative: Using res.on('finish')
function timingMiddlewareV2(req, res, next) {
    const startTime = Date.now();
    
    res.on('finish', () => {
        const duration = Date.now() - startTime;
        console.log(`${req.method} ${req.path} - ${duration}ms`);
    });
    
    next();
}

// Usage
app.use(express.json());
app.use(loggerMiddleware);
app.use(timingMiddleware);

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/users', (req, res) => {
    // Simulate some processing
    setTimeout(() => {
        res.json({ users: [] });
    }, 100);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

/**
 * Advanced: Combined Middleware
 */
function combinedMiddleware(req, res, next) {
    const startTime = Date.now();
    const timestamp = new Date().toISOString();
    
    console.log(`[${timestamp}] ${req.method} ${req.path}`);
    
    res.on('finish', () => {
        const duration = Date.now() - startTime;
        console.log(`[${timestamp}] ${req.method} ${req.path} - ${duration}ms - ${res.statusCode}`);
    });
    
    next();
}

/**
 * Error Handling Middleware
 */
function errorHandler(err, req, res, next) {
    console.error('Error:', err);
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
            status: err.status || 500
        }
    });
}

// Use error handler last
// app.use(errorHandler);

