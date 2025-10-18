# React Cheatsheet

## Quick Reference Guide

### Component Basics

```jsx
// Function Component
function Component() {
  return <div>Hello</div>;
}

// Arrow Function
const Component = () => <div>Hello</div>;

// With Props
const Component = ({ name, age }) => (
  <div>{name}, {age}</div>
);

// Export
export default Component;
export { Component };
```

### JSX

```jsx
// Expressions
<div>{2 + 2}</div>
<div>{user.name}</div>
<div>{isActive ? 'Yes' : 'No'}</div>

// Attributes
<div className="box"></div>
<img src={url} alt="desc" />
<button onClick={handleClick}>Click</button>

// Style
<div style={{ color: 'red', fontSize: 16 }}></div>

// Children
<div>{children}</div>
```

### Hooks

#### useState
```jsx
const [state, setState] = useState(initialValue);
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', age: 0 });

// Update
setCount(count + 1);
setCount(prev => prev + 1); // Functional update
setUser({ ...user, name: 'John' }); // Object update
```

#### useEffect
```jsx
// Every render
useEffect(() => { /* code */ });

// On mount
useEffect(() => { /* code */ }, []);

// On dependency change
useEffect(() => { /* code */ }, [dep]);

// With cleanup
useEffect(() => {
  /* code */
  return () => { /* cleanup */ };
}, []);
```

#### useContext
```jsx
const value = useContext(MyContext);
```

#### useRef
```jsx
const ref = useRef(initialValue);
<input ref={ref} />
ref.current.focus();
```

#### useReducer
```jsx
const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: 'ACTION' });
```

#### useMemo
```jsx
const memoized = useMemo(() => compute(a, b), [a, b]);
```

#### useCallback
```jsx
const memoizedFn = useCallback(() => { /* code */ }, [deps]);
```

### Props

```jsx
// Pass props
<Component name="John" age={25} active={true} />

// Receive props
function Component(props) {
  return <div>{props.name}</div>;
}

// Destructure
function Component({ name, age }) {
  return <div>{name}</div>;
}

// Default props
function Component({ name = "Guest" }) {}

// Children
<Component>
  <div>Child content</div>
</Component>

function Component({ children }) {
  return <div>{children}</div>;
}

// Spread props
<Component {...props} />
```

### Conditional Rendering

```jsx
// If-else
if (condition) return <A />;
return <B />;

// Ternary
{condition ? <A /> : <B />}

// Logical AND
{condition && <Component />}

// Null rendering
if (!show) return null;
```

### Lists and Keys

```jsx
// Map
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}

// With component
{users.map(user => (
  <UserCard key={user.id} user={user} />
))}

// Filter and map
{items
  .filter(item => item.active)
  .map(item => <div key={item.id}>{item.name}</div>)
}
```

### Event Handling

```jsx
// Click
<button onClick={handleClick}>Click</button>
<button onClick={() => handleClick(id)}>Click</button>

// Change
<input onChange={(e) => setValue(e.target.value)} />

// Submit
<form onSubmit={handleSubmit}>

// Prevent default
const handleSubmit = (e) => {
  e.preventDefault();
};

// Common events
onClick, onChange, onSubmit, onFocus, onBlur
onMouseEnter, onMouseLeave
onKeyDown, onKeyUp, onKeyPress
```

### Forms

```jsx
// Controlled input
const [value, setValue] = useState('');
<input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>

// Form with multiple inputs
const [form, setForm] = useState({ name: '', email: '' });

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm(prev => ({ ...prev, [name]: value }));
};

<input name="name" value={form.name} onChange={handleChange} />
<input name="email" value={form.email} onChange={handleChange} />

// Checkbox
<input
  type="checkbox"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>

// Select
<select value={selected} onChange={(e) => setSelected(e.target.value)}>
  <option value="1">One</option>
  <option value="2">Two</option>
</select>
```

### Context API

```jsx
// Create
const MyContext = createContext(defaultValue);

// Provider
<MyContext.Provider value={value}>
  <Component />
</MyContext.Provider>

// Consumer
const value = useContext(MyContext);
```

### Refs

```jsx
// Create ref
const ref = useRef(null);

// Attach to element
<div ref={ref}></div>

// Access
ref.current

// Common uses
ref.current.focus();
ref.current.scrollIntoView();
const { width, height } = ref.current.getBoundingClientRect();
```

### Styling

```jsx
// Inline styles
<div style={{ color: 'red', fontSize: 16 }}>

// CSS classes
<div className="container">
<div className={isActive ? 'active' : ''}>
<div className={`btn ${isActive ? 'active' : ''}`}>

// Conditional classes
<div className={clsx('btn', { active: isActive, disabled })}>
```

### Component Patterns

```jsx
// HOC
const withAuth = (Component) => {
  return (props) => {
    if (!isAuthenticated) return <Login />;
    return <Component {...props} />;
  };
};

// Render Props
<DataProvider
  render={(data) => <Display data={data} />}
/>

// Compound Components
<Tabs>
  <Tab label="One"><Content /></Tab>
  <Tab label="Two"><Content /></Tab>
</Tabs>

// Custom Hook
function useCustomHook() {
  const [state, setState] = useState();
  // logic
  return { state, setState };
}
```

### Performance Optimization

```jsx
// React.memo
const Memoized = React.memo(Component);

// useMemo
const value = useMemo(() => expensive(a, b), [a, b]);

// useCallback
const fn = useCallback(() => { /* code */ }, [deps]);

// Lazy loading
const Component = lazy(() => import('./Component'));

<Suspense fallback={<Loading />}>
  <Component />
</Suspense>

// Code splitting
import('./module').then(module => {});
```

### React Router (v6)

```jsx
// Setup
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/users/:id" element={<User />} />
  </Routes>
</BrowserRouter>

// Link
<Link to="/about">About</Link>

// Navigate programmatically
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/about');

// Get params
import { useParams } from 'react-router-dom';
const { id } = useParams();

// Get query params
import { useSearchParams } from 'react-router-dom';
const [searchParams] = useSearchParams();
const query = searchParams.get('q');
```

### Error Handling

```jsx
// Error Boundary (class component)
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    logError(error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

### Common Custom Hooks

```jsx
// useLocalStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}

// useDebounce
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return debouncedValue;
}

// useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => { setData(data); setLoading(false); })
      .catch(err => { setError(err); setLoading(false); });
  }, [url]);
  
  return { data, loading, error };
}

// useToggle
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle];
}

// usePrevious
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => { ref.current = value; });
  return ref.current;
}
```

### PropTypes (Type Checking)

```jsx
import PropTypes from 'prop-types';

Component.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isActive: PropTypes.bool,
  items: PropTypes.array,
  user: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.node,
  element: PropTypes.element,
  custom: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }),
  oneOf: PropTypes.oneOf(['small', 'medium', 'large']),
  arrayOf: PropTypes.arrayOf(PropTypes.number),
  exact: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number
  })
};

Component.defaultProps = {
  name: 'Guest',
  age: 0
};
```

### React 18+ Features

```jsx
// Automatic Batching
// Multiple setState calls are automatically batched

// Transitions
import { useTransition } from 'react';
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setSearchTerm(value);
});

// Suspense for Data Fetching
<Suspense fallback={<Loading />}>
  <Component />
</Suspense>

// useId
import { useId } from 'react';
const id = useId();

// useDeferredValue
const deferredValue = useDeferredValue(value);
```

### Best Practices

```jsx
// ✅ Do
- Use functional components
- Use hooks
- Keep components small
- Use meaningful names
- Destructure props
- Use fragments
- Use key with lists
- Cleanup in useEffect
- Use functional setState
- Memoize expensive operations

// ❌ Don't
- Modify state directly
- Use index as key (if list changes)
- Call hooks conditionally
- Forget dependencies in useEffect
- Create functions in render (if passing to children)
- Mutate props
- Use unnecessary state
```

### Common Patterns

```jsx
// Loading state
const [loading, setLoading] = useState(true);
if (loading) return <Spinner />;

// Error state
const [error, setError] = useState(null);
if (error) return <Error message={error} />;

// Empty state
if (items.length === 0) return <Empty />;

// Pagination
const [page, setPage] = useState(1);
const itemsPerPage = 10;
const start = (page - 1) * itemsPerPage;
const end = start + itemsPerPage;
const displayItems = items.slice(start, end);

// Search/Filter
const [search, setSearch] = useState('');
const filtered = items.filter(item =>
  item.name.toLowerCase().includes(search.toLowerCase())
);

// Modal
const [isOpen, setIsOpen] = useState(false);
{isOpen && <Modal onClose={() => setIsOpen(false)} />}

// Tabs
const [activeTab, setActiveTab] = useState(0);
```

### Keyboard Shortcuts in React DevTools

- `Ctrl/Cmd + Shift + C` - Inspect element
- `Ctrl/Cmd + F` - Search components
- Click component to see props/state

---

**Quick Tips:**
- Always use `key` prop with lists
- Cleanup subscriptions in useEffect
- Use functional updates for state that depends on previous state
- Memoize expensive calculations
- Profile your app with React DevTools
- Keep components pure when possible
- Use TypeScript for better type safety


