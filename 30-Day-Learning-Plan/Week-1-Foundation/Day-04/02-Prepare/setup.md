# Day 04 - Setup Guide

## Prerequisites

- React project from Day 03
- Node.js installed (v18+)
- Code editor (VS Code recommended)

## Project Setup

### Continue with Existing React Project
```bash
cd day03-react-app
# Or create new project
npm create vite@latest day04-react-app -- --template react
cd day04-react-app
npm install
```

## Testing Your Setup

### Test Hooks
```jsx
import { useEffect, useState } from 'react';

function TestComponent() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Component mounted');
    return () => console.log('Component unmounted');
  }, []);
  
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

## Files to Create

- `useFetch.js` - Custom hook for data fetching
- `TwoPointers.js` - Two pointers practice problems
- `HooksDemo.jsx` - Demonstration of hooks

## Ready to Start!

Once setup is complete, move to `03-Solve` folder to begin coding.

