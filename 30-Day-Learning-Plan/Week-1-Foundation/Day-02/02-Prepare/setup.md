# Day 02 - Setup Guide

## Prerequisites

- Node.js installed (v18+)
- Code editor (VS Code recommended)
- Browser with DevTools

## Environment Setup

### 1. Create Working Directory
```bash
mkdir day02-workspace
cd day02-workspace
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

### Test `this` Binding
Open browser console and run:
```javascript
const obj = {
  name: 'Test',
  regular: function() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};

obj.regular(); // 'Test'
obj.arrow();   // undefined
```

### Test HashMap
```javascript
const map = new Map();
map.set('test', 'value');
console.log(map.get('test')); // 'value'
```

## Files to Create

- `throttle.js` - Your throttle implementation
- `debounce.js` - Your debounce implementation
- `hashmap-problems.js` - HashMap practice problems
- `test.html` - HTML file to test throttle/debounce

## Ready to Start!

Once setup is complete, move to `03-Solve` folder to begin coding.

