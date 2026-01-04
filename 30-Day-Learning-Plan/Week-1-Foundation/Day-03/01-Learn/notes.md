# React Fundamentals - Day 03

## Components

### Functional Components
Modern React uses functional components with hooks:
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Arrow function syntax
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};
```

### Class Components
Traditional React components (still used in legacy code):
```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

## State Management

### useState Hook
Manages component state in functional components:
```javascript
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
```

### State Updates
- State updates are asynchronous
- Use functional updates for dependent state:
```javascript
setCount(prevCount => prevCount + 1);
```

---

## Props

### Passing Props
```javascript
function UserCard({ name, email, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// Usage
<UserCard name="John" email="john@example.com" age={25} />
```

### Props Validation (TypeScript or PropTypes)
```javascript
import PropTypes from 'prop-types';

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number
};
```

---

## Lifting State Up

When multiple components need the same state:
```javascript
function App() {
  const [temperature, setTemperature] = useState(20);

  return (
    <div>
      <TemperatureInput 
        value={temperature} 
        onChange={setTemperature} 
      />
      <TemperatureDisplay value={temperature} />
    </div>
  );
}
```

---

## Controlled vs Uncontrolled Components

### Controlled Component
Form data is handled by React state:
```javascript
function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <input 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
    />
  );
}
```

### Uncontrolled Component
Form data is handled by the DOM:
```javascript
function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return <input ref={inputRef} />;
}
```

**Use Controlled when**: You need real-time validation or transformation
**Use Uncontrolled when**: Simple forms, less re-renders needed

---

## Key Takeaways

1. Functional components with hooks are the modern standard
2. State is managed with `useState` hook
3. Props flow down from parent to child
4. Lift state up to share between siblings
5. Controlled components give more control, uncontrolled are simpler

