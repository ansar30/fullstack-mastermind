# React - Complete Guide

## Table of Contents
1. [Introduction to React](#introduction-to-react)
2. [Components](#components)
3. [JSX](#jsx)
4. [Props](#props)
5. [State](#state)
6. [Hooks](#hooks)
7. [Lifecycle Methods](#lifecycle-methods)
8. [Event Handling](#event-handling)
9. [Conditional Rendering](#conditional-rendering)
10. [Lists and Keys](#lists-and-keys)
11. [Forms](#forms)
12. [Component Composition](#component-composition)
13. [Performance Optimization](#performance-optimization)
14. [Error Boundaries](#error-boundaries)
15. [Refs and DOM](#refs-and-dom)

## Introduction to React

React is a JavaScript library for building user interfaces, particularly single-page applications. It was developed by Facebook (Meta) and is maintained by Meta and a community of developers.

### Key Features
- **Component-Based**: Build encapsulated components that manage their own state
- **Declarative**: Design simple views for each state in your application
- **Virtual DOM**: Efficient rendering and updates
- **One-Way Data Flow**: Predictable data management
- **JSX**: Syntax extension that looks similar to HTML

### Why React?
- Reusable components
- Fast rendering with Virtual DOM
- Strong community and ecosystem
- SEO-friendly with Next.js
- React Native for mobile development

## Components

Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.

### Function Components

```jsx
// Simple function component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Arrow function component
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

// With destructuring
const Welcome = ({ name }) => <h1>Hello, {name}</h1>;
```

### Class Components (Legacy but still important to know)

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Component Best Practices
- Keep components small and focused
- Use meaningful component names (PascalCase)
- Extract reusable logic into custom hooks
- Prefer function components over class components

## JSX

JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code in JavaScript.

### JSX Rules

```jsx
// Must return a single parent element
function App() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}

// Or use Fragment
function App() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}

// JavaScript expressions in JSX
const name = "John";
const element = <h1>Hello, {name}!</h1>;

// Attributes use camelCase
const element = <div className="container" onClick={handleClick}></div>;

// Self-closing tags
const element = <img src="image.jpg" alt="Description" />;
```

### JSX vs HTML Differences
- `className` instead of `class`
- `htmlFor` instead of `for`
- `onClick` instead of `onclick` (camelCase event handlers)
- Style as object: `style={{ color: 'red', fontSize: '14px' }}`
- All tags must be closed

## Props

Props (properties) are arguments passed into React components. They are read-only.

```jsx
// Passing props
<Welcome name="John" age={25} isActive={true} />

// Receiving props
function Welcome(props) {
  return <h1>Hello, {props.name}, you are {props.age} years old</h1>;
}

// Destructuring props
function Welcome({ name, age, isActive }) {
  return <h1>Hello, {name}</h1>;
}

// Default props
function Welcome({ name = "Guest", age = 0 }) {
  return <h1>Hello, {name}</h1>;
}

// Props children
function Container({ children }) {
  return <div className="container">{children}</div>;
}

<Container>
  <h1>Title</h1>
  <p>Content</p>
</Container>
```

## State

State is data that changes over time. Unlike props, state is managed within the component.

### useState Hook

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Multiple state variables
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
}

// State with objects
function User() {
  const [user, setUser] = useState({ name: '', email: '', age: 0 });
  
  const updateName = (newName) => {
    setUser({ ...user, name: newName }); // Spread to preserve other properties
  };
}

// State with arrays
function TodoList() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
}
```

### State Update Rules
- Never mutate state directly
- State updates may be asynchronous
- Use functional updates when new state depends on previous state

```jsx
// ❌ Wrong
setCount(count + 1);
setCount(count + 1); // May not work as expected

// ✅ Correct
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1);
```

## Hooks

Hooks let you use state and other React features in function components.

### useState

```jsx
const [state, setState] = useState(initialState);
```

### useEffect

```jsx
import { useEffect } from 'react';

// Run after every render
useEffect(() => {
  document.title = `Count: ${count}`;
});

// Run only once (on mount)
useEffect(() => {
  fetchData();
}, []);

// Run when dependencies change
useEffect(() => {
  fetchUser(userId);
}, [userId]);

// Cleanup function
useEffect(() => {
  const subscription = subscribeToData();
  
  return () => {
    subscription.unsubscribe(); // Cleanup
  };
}, []);
```

### useContext

```jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);
  return <header className={theme}>Header</header>;
}
```

### useRef

```jsx
import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

### useReducer

```jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
```

### useMemo

```jsx
import { useMemo } from 'react';

function ExpensiveComponent({ items }) {
  const expensiveCalculation = useMemo(() => {
    return items.reduce((acc, item) => acc + item.value, 0);
  }, [items]);
  
  return <div>Total: {expensiveCalculation}</div>;
}
```

### useCallback

```jsx
import { useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Function won't change between renders
  
  return <ChildComponent onClick={handleClick} />;
}
```

### Custom Hooks

```jsx
// useFetch custom hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(`/api/users/${userId}`);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{data.name}</div>;
}
```

## Lifecycle Methods

### In Function Components (with Hooks)

```jsx
useEffect(() => {
  // componentDidMount
  console.log('Component mounted');
  
  return () => {
    // componentWillUnmount
    console.log('Component will unmount');
  };
}, []);

useEffect(() => {
  // componentDidUpdate (when count changes)
  console.log('Count updated');
}, [count]);
```

### In Class Components (Legacy)

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    // Called after component is mounted
  }
  
  componentDidUpdate(prevProps, prevState) {
    // Called after component updates
  }
  
  componentWillUnmount() {
    // Called before component is unmounted
  }
  
  render() {
    return <div>My Component</div>;
  }
}
```

## Event Handling

```jsx
// Basic event handling
function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  
  return <button onClick={handleClick}>Click Me</button>;
}

// Inline event handler
<button onClick={() => alert('Clicked!')}>Click</button>

// Event with parameters
function Button() {
  const handleClick = (name) => {
    alert(`Hello ${name}`);
  };
  
  return <button onClick={() => handleClick('John')}>Greet</button>;
}

// Event object
function Input() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  
  return <input onChange={handleChange} />;
}

// Prevent default
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```

## Conditional Rendering

```jsx
// If-else
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in.</h1>;
}

// Ternary operator
function Greeting({ isLoggedIn }) {
  return (
    <h1>{isLoggedIn ? 'Welcome back!' : 'Please sign in.'}</h1>
  );
}

// Logical AND (&&)
function Mailbox({ unreadMessages }) {
  return (
    <div>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

// Null rendering
function Warning({ shouldShow }) {
  if (!shouldShow) {
    return null;
  }
  return <div className="warning">Warning!</div>;
}
```

## Lists and Keys

```jsx
// Rendering lists
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// Keys with index (avoid when possible)
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}

// Keys best practices
// ✅ Use unique, stable IDs
{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}

// ❌ Don't use array index if list can change
{todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}
```

## Forms

### Controlled Components

```jsx
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Uncontrolled Components

```jsx
function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', nameRef.current.value);
    console.log('Email:', emailRef.current.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} />
      <input type="email" ref={emailRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Component Composition

```jsx
// Container/Presentational pattern
function UserCard({ user }) {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// Higher-Order Component (HOC)
function withAuth(Component) {
  return function AuthComponent(props) {
    const isAuthenticated = useAuth();
    
    if (!isAuthenticated) {
      return <Login />;
    }
    
    return <Component {...props} />;
  };
}

// Render Props
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  
  return (
    <div onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

// Usage
<MouseTracker render={({ x, y }) => (
  <h1>Mouse at ({x}, {y})</h1>
)} />
```

## Performance Optimization

### React.memo

```jsx
const ExpensiveComponent = React.memo(({ data }) => {
  // Only re-renders if data prop changes
  return <div>{data}</div>;
});
```

### useMemo and useCallback

```jsx
function ProductList({ products, category }) {
  // Memoize expensive calculations
  const filteredProducts = useMemo(() => {
    return products.filter(p => p.category === category);
  }, [products, category]);
  
  // Memoize callback functions
  const handleClick = useCallback((productId) => {
    console.log('Product clicked:', productId);
  }, []);
  
  return (
    <div>
      {filteredProducts.map(product => (
        <Product key={product.id} data={product} onClick={handleClick} />
      ))}
    </div>
  );
}
```

### Code Splitting and Lazy Loading

```jsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### Virtualization for Long Lists

```jsx
// Using react-window
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          {items[index].name}
        </div>
      )}
    </FixedSizeList>
  );
}
```

## Error Boundaries

Error boundaries catch JavaScript errors in their child component tree.

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
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
  <MyComponent />
</ErrorBoundary>
```

## Refs and DOM

### useRef for DOM Access

```jsx
function FocusInput() {
  const inputRef = useRef(null);
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  return <input ref={inputRef} />;
}
```

### useRef for Mutable Values

```jsx
function Timer() {
  const intervalRef = useRef(null);
  const [count, setCount] = useState(0);
  
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  };
  
  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
```

### forwardRef

```jsx
const FancyInput = forwardRef((props, ref) => (
  <input ref={ref} className="fancy-input" {...props} />
));

// Usage
function Parent() {
  const inputRef = useRef();
  
  return <FancyInput ref={inputRef} />;
}
```

## Best Practices

1. **Component Organization**
   - One component per file
   - Group related components
   - Use meaningful names

2. **State Management**
   - Keep state as local as possible
   - Lift state up when needed
   - Use context for global state sparingly

3. **Performance**
   - Avoid unnecessary re-renders
   - Use React DevTools Profiler
   - Implement code splitting for large apps
   - Optimize images and assets

4. **Code Quality**
   - Use PropTypes or TypeScript
   - Write unit tests
   - Follow consistent naming conventions
   - Keep components small and focused

5. **Hooks Rules**
   - Only call hooks at the top level
   - Only call hooks from React functions
   - Use ESLint plugin for hooks

6. **Accessibility**
   - Use semantic HTML
   - Add ARIA labels when needed
   - Ensure keyboard navigation
   - Test with screen readers

---

**Next Steps:**
- Review [Interview Questions](./interview-questions.md)
- Practice with [Code Examples](./code-examples/)
- Check the [Cheatsheet](./cheatsheet.md)

