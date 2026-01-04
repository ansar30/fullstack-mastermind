# Day 06 - Setup Guide

## Prerequisites

- Node.js installed (v18+)
- MongoDB installed or MongoDB Atlas account
- Express project from Day 05

## MongoDB Setup

### Option 1: Local MongoDB
```bash
# Install MongoDB (varies by OS)
# macOS: brew install mongodb-community
# Windows: Download from mongodb.com
# Linux: sudo apt-get install mongodb

# Start MongoDB
mongod
```

### Option 2: MongoDB Atlas (Cloud)
1. Sign up at mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string

## Install Mongoose

```bash
npm install mongoose
```

## Project Structure
```
day06-api/
├── server.js
├── models/
│   └── User.js
├── routes/
│   └── users.js
└── package.json
```

## Testing Connection

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/day06')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));
```

## Files to Create

- `models/User.js` - User model
- `routes/users.js` - User CRUD routes
- `frequency-map.js` - Frequency map problems

## Ready to Start!

Once setup is complete, move to `03-Solve` folder to begin coding.

