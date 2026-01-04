# Day 01 - Setup Guide

## Prerequisites

- Node.js installed (v18+)
- Code editor (VS Code recommended)
- Browser with DevTools

## Environment Setup

### 1. Create Working Directory
```bash
mkdir day01-workspace
cd day01-workspace
```

### 2. Initialize Node Project
```bash
npm init -y
```

### 3. Install Development Tools (Optional)
```bash
npm install --save-dev jest
```

## Testing Your Environment

### Test JavaScript Console
Open browser console and run:
```javascript
console.log('Event loop test');
setTimeout(() => console.log('Macro'), 0);
Promise.resolve().then(() => console.log('Micro'));
console.log('Sync');
```

Expected output: `Event loop test`, `Sync`, `Micro`, `Macro`

## Files to Create

- `debounce.js` - Your debounce implementation
- `two-sum.js` - Two Sum solution
- `test.html` - HTML file to test debounce

## Ready to Start!

Once setup is complete, move to `03-Solve` folder to begin coding.
