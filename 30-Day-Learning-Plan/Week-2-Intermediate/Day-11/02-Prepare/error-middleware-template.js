/**
 * Error Middleware Template
 * 
 * Task: Implement error middleware + async wrapper
 * 
 * Requirements:
 * - Centralized error handler
 * - AsyncHandler wrapper function
 * - Custom error class
 * - Proper error responses
 */

const express = require('express');
const app = express();

// TODO: Create custom error class
class AppError extends Error {
    // TODO: Add statusCode and status properties
}

// TODO: Create asyncHandler wrapper
function asyncHandler(fn) {
    // TODO: Return function that catches errors
}

// TODO: Create error middleware
function errorHandler(err, req, res, next) {
    // TODO: Handle errors and send response
}

// Example route with asyncHandler
app.get('/users', asyncHandler(async (req, res) => {
    // TODO: Fetch users
    // Throw error if needed
}));

// Use error middleware last
// app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

