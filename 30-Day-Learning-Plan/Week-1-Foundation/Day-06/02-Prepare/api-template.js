/**
 * User CRUD API Template
 * 
 * Task: Build complete user CRUD API
 * 
 * Requirements:
 * - Create user (POST /users)
 * - Get all users (GET /users)
 * - Get user by ID (GET /users/:id)
 * - Update user (PUT /users/:id)
 * - Delete user (DELETE /users/:id)
 */

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// TODO: Define User schema
const userSchema = new mongoose.Schema({
    // name, email, age fields
});

const User = mongoose.model('User', userSchema);

// TODO: Create user
router.post('/', async (req, res) => {
    // Create new user
});

// TODO: Get all users
router.get('/', async (req, res) => {
    // Get all users
});

// TODO: Get user by ID
router.get('/:id', async (req, res) => {
    // Get user by ID
});

// TODO: Update user
router.put('/:id', async (req, res) => {
    // Update user
});

// TODO: Delete user
router.delete('/:id', async (req, res) => {
    // Delete user
});

module.exports = router;

