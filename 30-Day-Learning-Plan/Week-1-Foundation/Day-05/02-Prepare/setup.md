# Day 05 - Setup Guide

## Prerequisites

- Node.js installed (v18+)
- npm package manager
- Code editor (VS Code recommended)

## Express Project Setup

### 1. Create Project Directory
```bash
mkdir day05-node-app
cd day05-node-app
```

### 2. Initialize Node Project
```bash
npm init -y
```

### 3. Install Express
```bash
npm install express
```

### 4. Install Development Dependencies
```bash
npm install --save-dev nodemon
```

### 5. Update package.json
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

## Project Structure
```
day05-node-app/
├── server.js
├── middleware/
│   ├── logger.js
│   └── timing.js
├── routes/
│   └── index.js
└── package.json
```

## Testing Your Setup

Create `server.js`:
```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

Run: `npm run dev`

## Files to Create

- `middleware/logger.js` - Logging middleware
- `middleware/timing.js` - Request timing middleware
- `sliding-window.js` - Sliding window problems

## Ready to Start!

Once setup is complete, move to `03-Solve` folder to begin coding.

