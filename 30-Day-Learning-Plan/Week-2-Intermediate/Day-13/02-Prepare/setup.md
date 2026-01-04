# Day 13 - Setup Guide

## Prerequisites

- Node.js project
- Express installed
- MongoDB/Mongoose

## Install Dependencies

```bash
npm install jsonwebtoken bcryptjs
npm install --save-dev @types/jsonwebtoken
```

## Environment Variables

Create `.env` file:
```
JWT_SECRET=your-secret-key
JWT_REFRESH_SECRET=your-refresh-secret
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
```

## Files to Create

- `middleware/auth.js` - Authentication middleware
- `routes/auth.js` - Auth routes
- `stack-problems.js` - Stack practice problems

## Ready to Start!

Move to `03-Solve` folder to begin coding.

