# React Interview Questions & Answers

## Table of Contents
- [Basic Level Questions](#basic-level-questions)
- [Intermediate Level Questions](#intermediate-level-questions)
- [Advanced Level Questions](#advanced-level-questions)
- [Practical Coding Questions](#practical-coding-questions)

---

## Basic Level Questions

### 1. What is React?

**Answer:** React is a JavaScript library for building user interfaces, particularly single-page applications. It was created by Facebook (Meta) and allows developers to create reusable UI components. React uses a virtual DOM for efficient rendering and follows a component-based architecture.

**Key Features:**
- Component-based architecture
- Virtual DOM for performance
- Unidirectional data flow
- JSX syntax
- Rich ecosystem

---

### 2. What is JSX?

**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code in JavaScript files. JSX gets compiled to `React.createElement()` calls.

```jsx
// JSX
const element = <h1>Hello, World!</h1>;

// Compiles to:
const element = React.createElement('h1', null, 'Hello, World!');
```

---

### 3. What is the difference between functional and class components?

**Answer:**

**Functional Components:**
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
- Simpler syntax
- Can use hooks
- No `this` keyword
- Better performance
- Recommended approach

**Class Components:**
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
- More boilerplate
- Uses lifecycle methods
- Uses `this` keyword
- Legacy approach

---

### 4. What is the Virtual DOM?

**Answer:** The Virtual DOM is a lightweight copy of the actual DOM kept in memory. React uses it to optimize rendering by:

1. Creating a virtual representation of the UI
2. When state changes, creating a new Virtual DOM
3. Comparing (diffing) with the previous Virtual DOM
4. Updating only the changed parts in the real DOM

**Benefits:**
- Faster updates
- Better performance
- Batch updates
- Cross-browser compatibility

---

### 5. What are props in React?

**Answer:** Props (properties) are read-only inputs passed from parent to child components. They allow data to flow down the component tree.

```jsx
// Parent
<UserCard name="John" age={25} />

// Child
function UserCard({ name, age }) {
  return <div>{name} is {age} years old</div>;
}
```

**Key Points:**
- Props are immutable
- Passed from parent to child
- Can be any data type
- Children is a special prop

---

### 6. What is state in React?

**Answer:** State is a built-in object that stores component data that can change over time. When state changes, the component re-renders.

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**State vs Props:**
- State is mutable, props are immutable
- State is local to component, props come from parent
- State can be changed with setState/useState
- Props are read-only

---

### 7. What are React Hooks?

**Answer:** Hooks are functions that let you use state and other React features in functional components. Introduced in React 16.8.

**Common Hooks:**
- `useState` - Add state to functional components
- `useEffect` - Perform side effects
- `useContext` - Access context values
- `useRef` - Access DOM elements or persist values
- `useMemo` - Memoize expensive calculations
- `useCallback` - Memoize functions
- `useReducer` - Complex state management

---

### 8. What is useState hook?

**Answer:** `useState` is a hook that adds state to functional components.

```jsx
const [state, setState] = useState(initialValue);

// Example
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

**Key Points:**
- Returns array with current state and updater function
- Can use multiple useState calls
- State updates trigger re-render
- Initial value can be any type

---

### 9. What is useEffect hook?

**Answer:** `useEffect` performs side effects in functional components. It runs after render and can be controlled with dependencies.

```jsx
// Run after every render
useEffect(() => {
  console.log('Rendered');
});

// Run once (on mount)
useEffect(() => {
  fetchData();
}, []);

// Run when dependency changes
useEffect(() => {
  fetchUser(userId);
}, [userId]);

// With cleanup
useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);
```

---

### 10. What is the difference between controlled and uncontrolled components?

**Answer:**

**Controlled Components:**
- Form data handled by React state
- Single source of truth
- More control over form behavior

```jsx
function Form() {
  const [value, setValue] = useState('');
  
  return (
    <input 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
    />
  );
}
```

**Uncontrolled Components:**
- Form data handled by DOM
- Use refs to access values
- Less React code

```jsx
function Form() {
  const inputRef = useRef();
  
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };
  
  return <input ref={inputRef} />;
}
```

---

## Intermediate Level Questions

### 11. Explain the component lifecycle in React

**Answer:** Component lifecycle has three phases:

**1. Mounting** (component is created and inserted into DOM)
- constructor()
- getDerivedStateFromProps()
- render()
- componentDidMount()

**2. Updating** (component re-renders due to state/props change)
- getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

**3. Unmounting** (component is removed from DOM)
- componentWillUnmount()

**With Hooks:**
```jsx
useEffect(() => {
  // componentDidMount
  
  return () => {
    // componentWillUnmount
  };
}, []);

useEffect(() => {
  // componentDidUpdate for specific dependency
}, [dependency]);
```

---

### 12. What is Context API?

**Answer:** Context API provides a way to pass data through the component tree without manually passing props at every level.

```jsx
// Create context
const ThemeContext = createContext('light');

// Provider
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}

// Consumer
function Header() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Header</div>;
}
```

**When to use:**
- Global state (theme, user, language)
- Avoid prop drilling
- Share data across many components

---

### 13. What is prop drilling and how to avoid it?

**Answer:** Prop drilling is passing props through multiple levels of components that don't need the data, just to get it to a deeply nested component.

**Problem:**
```jsx
<App user={user} />
  <Header user={user} />
    <Nav user={user} />
      <UserMenu user={user} />
```

**Solutions:**
1. **Context API**
2. **Component composition**
3. **State management libraries** (Redux, Zustand)
4. **Custom hooks**

---

### 14. What is useReducer and when to use it?

**Answer:** `useReducer` is a hook for complex state logic, similar to Redux reducers.

```jsx
const initialState = { count: 0 };

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
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
```

**When to use:**
- Complex state logic
- Multiple sub-values
- State depends on previous state
- Share logic across components

---

### 15. What is useCallback and useMemo?

**Answer:**

**useCallback** - Memoizes functions
```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

**useMemo** - Memoizes computed values
```jsx
const memoizedValue = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);
```

**Differences:**
- `useCallback` returns memoized function
- `useMemo` returns memoized value
- Both prevent unnecessary re-renders
- Use when passing callbacks to optimized children

---

### 16. What are keys in React and why are they important?

**Answer:** Keys help React identify which items have changed, added, or removed in lists. They should be stable, unique, and consistent.

```jsx
// ✅ Good - using unique ID
{items.map(item => (
  <ListItem key={item.id} data={item} />
))}

// ❌ Bad - using index (if list can change)
{items.map((item, index) => (
  <ListItem key={index} data={item} />
))}
```

**Why important:**
- Helps with reconciliation
- Improves performance
- Prevents rendering bugs
- Maintains component state

---

### 17. What is React.memo()?

**Answer:** `React.memo` is a higher-order component that memoizes components to prevent unnecessary re-renders.

```jsx
const MyComponent = React.memo(function MyComponent({ data }) {
  return <div>{data}</div>;
});

// With custom comparison
const MyComponent = React.memo(
  function MyComponent({ data }) {
    return <div>{data}</div>;
  },
  (prevProps, nextProps) => {
    return prevProps.data === nextProps.data;
  }
);
```

**When to use:**
- Pure functional components
- Expensive render operations
- Component receives same props often

---

### 18. What are Higher-Order Components (HOC)?

**Answer:** HOC is a pattern where a function takes a component and returns a new enhanced component.

```jsx
function withAuth(Component) {
  return function AuthComponent(props) {
    const isAuthenticated = useAuth();
    
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    
    return <Component {...props} />;
  };
}

// Usage
const ProtectedPage = withAuth(Dashboard);
```

**Use cases:**
- Code reuse
- Logic abstraction
- Props manipulation
- State abstraction

---

### 19. What is the difference between useEffect and useLayoutEffect?

**Answer:**

**useEffect:**
- Runs after paint
- Asynchronous
- Doesn't block browser painting
- Use for most side effects

**useLayoutEffect:**
- Runs before paint
- Synchronous
- Blocks browser painting
- Use for DOM measurements

```jsx
// useEffect - doesn't block paint
useEffect(() => {
  fetchData();
}, []);

// useLayoutEffect - blocks paint
useLayoutEffect(() => {
  const { height } = ref.current.getBoundingClientRect();
  setHeight(height);
}, []);
```

---

### 20. What are Error Boundaries?

**Answer:** Error Boundaries are React components that catch JavaScript errors in their child component tree and display fallback UI.

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

**Note:** Error boundaries don't catch:
- Event handlers
- Async code
- Server-side rendering
- Errors in error boundary itself

---

## Advanced Level Questions

### 21. Explain React Fiber Architecture

**Answer:** React Fiber is the new reconciliation algorithm in React 16+. It allows React to split rendering work into chunks and spread it over multiple frames.

**Key Features:**
- **Incremental rendering** - Break work into chunks
- **Pause, abort, or reuse work** - Better control
- **Priority to different updates** - Important updates first
- **New concurrency primitives** - Suspense, transitions

**Benefits:**
- Better perceived performance
- Smoother animations
- Better responsiveness
- Split work across frames

---

### 22. What is Reconciliation in React?

**Answer:** Reconciliation is the process React uses to update the DOM efficiently by comparing the new Virtual DOM with the previous one.

**Algorithm:**
1. **Element type changes** - Destroy old tree, build new
2. **Same element type** - Update only changed attributes
3. **Keys** - Used to match children across renders

**Diffing Strategy:**
- Tree diffing (level by level)
- Component diffing
- Element diffing
- List diffing with keys

---

### 23. What are React Portals?

**Answer:** Portals provide a way to render children into a DOM node outside the parent component hierarchy.

```jsx
import { createPortal } from 'react-dom';

function Modal({ children }) {
  return createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById('modal-root')
  );
}
```

**Use cases:**
- Modals
- Tooltips
- Dropdowns
- Notifications

---

### 24. What is Code Splitting and Lazy Loading?

**Answer:** Code splitting breaks your app into smaller chunks loaded on demand, improving initial load time.

```jsx
import { lazy, Suspense } from 'react';

// Lazy load component
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}

// Route-based splitting
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
```

**Benefits:**
- Faster initial load
- Better performance
- Load code when needed
- Smaller bundle size

---

### 25. What is React.StrictMode?

**Answer:** StrictMode is a development tool that highlights potential problems in an application.

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

**Checks for:**
- Unsafe lifecycle methods
- Legacy string ref API
- Deprecated findDOMNode usage
- Unexpected side effects
- Legacy context API

**Note:** Only runs in development mode

---

### 26. Explain Custom Hooks

**Answer:** Custom hooks are reusable functions that use React hooks. They must start with "use".

```jsx
// Custom hook
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage('name', '');
  return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
```

**Benefits:**
- Code reuse
- Better organization
- Testable logic
- Share stateful logic

---

### 27. What is Suspense and Concurrent Mode?

**Answer:** 

**Suspense** allows components to "wait" for something before rendering.

```jsx
const ProfilePage = lazy(() => import('./ProfilePage'));

<Suspense fallback={<Spinner />}>
  <ProfilePage />
</Suspense>
```

**Concurrent Mode** (React 18+) makes React apps more responsive by rendering component trees without blocking the main thread.

**Features:**
- Concurrent rendering
- Automatic batching
- Transitions
- Streaming SSR

---

### 28. What are Render Props?

**Answer:** Render props is a pattern where a component's prop is a function that returns React elements.

```jsx
function DataProvider({ render }) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchData().then(setData);
  }, []);
  
  return render(data);
}

// Usage
<DataProvider 
  render={(data) => (
    data ? <Display data={data} /> : <Loading />
  )}
/>
```

**Note:** Mostly replaced by hooks, but still valid pattern.

---

### 29. How does React handle performance optimization?

**Answer:**

**Techniques:**
1. **Memoization** - React.memo, useMemo, useCallback
2. **Code Splitting** - Dynamic imports
3. **Virtualization** - Render only visible items
4. **Lazy Loading** - Load components on demand
5. **Avoid Inline Functions** - In render
6. **Keys in Lists** - Stable keys
7. **Production Build** - Minified code
8. **Profiling** - React DevTools Profiler

```jsx
// Example optimization
const List = React.memo(function List({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.name.localeCompare(b.name));
  }, [items]);
  
  const handleClick = useCallback((id) => {
    console.log(id);
  }, []);
  
  return (
    <div>
      {sortedItems.map(item => (
        <Item key={item.id} data={item} onClick={handleClick} />
      ))}
    </div>
  );
});
```

---

### 30. What is the difference between React and React Native?

**Answer:**

**React (React DOM):**
- Web development
- Renders to HTML DOM
- Uses HTML tags
- Runs in browsers
- CSS for styling

**React Native:**
- Mobile app development
- Renders to native components
- Uses native components (View, Text)
- Runs on iOS/Android
- StyleSheet for styling

**Similarities:**
- Same React core concepts
- Component-based
- JSX syntax
- Hooks
- State management

---

## Practical Coding Questions

### 31. Build a Counter Component

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

---

### 32. Build a Todo List

```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

### 33. Implement useDebounce Hook

```jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

// Usage
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  
  useEffect(() => {
    if (debouncedSearch) {
      // API call with debouncedSearch
      console.log('Searching for:', debouncedSearch);
    }
  }, [debouncedSearch]);
  
  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

---

### 34. Create a Simple Form with Validation

```jsx
function Form() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

### 35. Implement useFetch Hook

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let cancelled = false;
    
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const json = await response.json();
        if (!cancelled) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };
    
    fetchData();
    
    return () => {
      cancelled = true;
    };
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(`/api/users/${userId}`);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
}
```

---

## Additional Tips for React Interviews

1. **Understand the fundamentals** - Don't just memorize
2. **Practice coding** - Build real projects
3. **Know the ecosystem** - React Router, Redux, etc.
4. **Performance optimization** - Be ready to discuss
5. **Best practices** - Code quality matters
6. **Keep updated** - React 18+ features
7. **Testing** - Jest, React Testing Library
8. **TypeScript** - Increasingly common
9. **Problem-solving** - Think out loud during coding
10. **Real-world experience** - Share project examples

---

**See Also:**
- [React Overview](./overview.md)
- [Code Examples](./code-examples/)
- [Cheatsheet](./cheatsheet.md)

