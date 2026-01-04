# React Hooks Mastery - Day 04

## useEffect Hook

### Basic Usage
```javascript
import { useEffect, useState } from 'react';

function Component() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Side effect code here
    fetchData().then(setData);
  }, []); // Empty dependency array = run once on mount

  return <div>{data}</div>;
}
```

### Dependency Array
- **No array**: Runs on every render
- **Empty array []**: Runs once on mount
- **With dependencies [dep1, dep2]**: Runs when dependencies change

```javascript
useEffect(() => {
  // Runs when count changes
}, [count]);
```

### Cleanup Function
```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  // Cleanup function
  return () => {
    clearInterval(timer);
  };
}, []);
```

---

## useMemo Hook

### Purpose
Memoizes expensive calculations to avoid recomputation on every render.

```javascript
import { useMemo } from 'react';

function ExpensiveComponent({ items }) {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]); // Only recalculate when items change

  return <div>Total: {expensiveValue}</div>;
}
```

### When to Use
- Expensive calculations
- Preventing unnecessary re-renders
- Referential equality for objects/arrays

---

## useCallback Hook

### Purpose
Memoizes functions to prevent recreation on every render.

```javascript
import { useCallback, useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Function reference stays same

  return <Child onClick={handleClick} />;
}
```

### When to Use
- Passing functions to memoized children
- Functions in dependency arrays
- Preventing unnecessary re-renders

---

## Custom Hooks

### Creating Custom Hooks
```javascript
// useCounter.js
import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// Usage
function Component() {
  const { count, increment, decrement } = useCounter(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

### Custom Hook Rules
1. Must start with "use"
2. Can call other hooks
3. Share stateful logic between components

---

## useMemo vs useCallback

### useMemo
- Memoizes **values**
- Returns computed value
- Use for expensive calculations

### useCallback
- Memoizes **functions**
- Returns function reference
- Use for function props

---

## Key Takeaways

1. useEffect handles side effects and cleanup
2. useMemo optimizes expensive calculations
3. useCallback optimizes function references
4. Custom hooks extract reusable logic
5. Dependency arrays control when effects run

