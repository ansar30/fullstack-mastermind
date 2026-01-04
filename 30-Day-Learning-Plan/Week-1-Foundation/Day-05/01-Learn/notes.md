# Node.js Core Concepts - Day 05

## Event-Driven Architecture

### What is Event-Driven?
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

### Event Loop
- Single-threaded event loop
- Handles async operations
- Callbacks, Promises, async/await

### Event Emitter Pattern
```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event', (data) => {
  console.log('Event received:', data);
});

emitter.emit('event', 'Hello World');
```

---

## Express Middleware

### What is Middleware?
Functions that execute during the request-response cycle. They have access to `req`, `res`, and `next`.

### Basic Middleware
```javascript
const express = require('express');
const app = express();

// Middleware function
function logger(req, res, next) {
  console.log(`${req.method} ${req.path}`);
  next(); // Pass control to next middleware
}

app.use(logger);
```

### Types of Middleware
1. **Application-level**: `app.use()`
2. **Router-level**: `router.use()`
3. **Error-handling**: `app.use((err, req, res, next) => {})`
4. **Built-in**: `express.json()`, `express.static()`

---

## Routing Structure

### Basic Routes
```javascript
app.get('/users', (req, res) => {
  res.json({ users: [] });
});

app.post('/users', (req, res) => {
  res.json({ message: 'User created' });
});
```

### Route Parameters
```javascript
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ userId: id });
});
```

### Best Practices
- Separate routes into modules
- Use router for related routes
- Validate input
- Handle errors properly

---

## Key Takeaways

1. Node.js is event-driven and non-blocking
2. Middleware processes requests in sequence
3. Always call `next()` in middleware
4. Organize routes in separate files
5. Use Express router for modular routing

