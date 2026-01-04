/**
 * Authentication Template
 * 
 * Task: Build login, logout, refresh token flow
 * 
 * Requirements:
 * - Login endpoint (generate tokens)
 * - Refresh token endpoint
 * - Logout endpoint (invalidate refresh token)
 * - Authentication middleware
 * - Protected routes
 */

const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// TODO: Login endpoint
router.post('/login', async (req, res) => {
    // TODO: Validate credentials
    // TODO: Generate access and refresh tokens
    // TODO: Store refresh token
    // TODO: Return tokens
});

// TODO: Refresh token endpoint
router.post('/refresh', async (req, res) => {
    // TODO: Verify refresh token
    // TODO: Generate new access token
    // TODO: Optionally rotate refresh token
    // TODO: Return new tokens
});

// TODO: Logout endpoint
router.post('/logout', async (req, res) => {
    // TODO: Invalidate refresh token
    // TODO: Return success
});

// TODO: Authentication middleware
function authenticate(req, res, next) {
    // TODO: Extract token from header
    // TODO: Verify token
    // TODO: Attach user to request
    // TODO: Call next()
}

module.exports = { router, authenticate };

