# Advanced React - Day 09

## useReducer Hook

### What is useReducer?
An alternative to `useState` for managing complex state logic.

### Basic Usage
```javascript
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

### When to Use useReducer
- Complex state logic
- Multiple sub-values
- State updates depend on previous state
- Better for state machines

---

## Context API

### What is Context?
Provides a way to pass data through the component tree without prop drilling.

### Creating Context
```javascript
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

### Using Context
```javascript
function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, setTheme } = useTheme();
  return <div className={theme}>Header</div>;
}
```

---

## Lazy Loading and Code Splitting

### React.lazy
Dynamically import components:

```javascript
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### Benefits
- Reduces initial bundle size
- Loads components on demand
- Improves performance

---

## useReducer + Context Pattern

Combine useReducer with Context for global state:

```javascript
const AppContext = createContext();

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, {
    user: null,
    loading: false
  });
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
```

---

## Key Takeaways

1. useReducer for complex state logic
2. Context API eliminates prop drilling
3. Lazy loading reduces bundle size
4. Combine useReducer + Context for global state
5. Use Suspense for loading states

