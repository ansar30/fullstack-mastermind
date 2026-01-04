/**
 * Error Middleware + Async Handler - Complete Solution
 */

const express = require('express');
const app = express();

app.use(express.json());

// Custom Error Class
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        
        Error.captureStackTrace(this, this.constructor);
    }
}

// AsyncHandler Wrapper
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

// Error Middleware
function errorHandler(err, req, res, next) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    
    if (process.env.NODE_ENV === 'development') {
        res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack
        });
    } else {
        // Production
        if (err.isOperational) {
            res.status(err.statusCode).json({
                status: err.status,
                message: err.message
            });
        } else {
            // Programming or unknown error
            console.error('ERROR:', err);
            res.status(500).json({
                status: 'error',
                message: 'Something went wrong!'
            });
        }
    }
}

// Example Routes
app.get('/users', asyncHandler(async (req, res) => {
    // Simulate database call
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
    ];
    res.json(users);
}));

app.get('/users/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    // Simulate not found
    if (id === '999') {
        throw new AppError('User not found', 404);
    }
    
    res.json({ id, name: 'John' });
}));

app.post('/users', asyncHandler(async (req, res) => {
    const { name, email } = req.body;
    
    // Validation
    if (!name || !email) {
        throw new AppError('Name and email are required', 400);
    }
    
    res.status(201).json({ id: Date.now(), name, email });
}));

// 404 Handler
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error Middleware (must be last)
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

/**
 * Usage Example:
 * 
 * // In route handlers, just throw errors
 * app.get('/data', asyncHandler(async (req, res) => {
 *   const data = await fetchData();
 *   if (!data) {
 *     throw new AppError('Data not found', 404);
 *   }
 *   res.json(data);
 * }));
 * 
 * // Errors automatically caught and handled
 */

