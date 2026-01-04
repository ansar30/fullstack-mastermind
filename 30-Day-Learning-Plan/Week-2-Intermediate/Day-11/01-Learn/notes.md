# Node.js Deep Concepts - Day 11

## Async Patterns

### Callbacks
Traditional async pattern:
```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback(null, 'Data');
  }, 1000);
}

fetchData((err, data) => {
  if (err) console.error(err);
  else console.log(data);
});
```

### Promises
Modern async pattern:
```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Async/Await
Syntactic sugar for promises:
```javascript
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

---

## Error Handling Best Practices

### Try-Catch Blocks
```javascript
async function processData() {
  try {
    const data = await fetchData();
    return process(data);
  } catch (error) {
    console.error('Error processing data:', error);
    throw error; // Re-throw if needed
  }
}
```

### Error Propagation
```javascript
async function handler() {
  try {
    await processData();
  } catch (error) {
    // Handle or log error
    next(error); // Pass to error middleware
  }
}
```

---

## Centralized Error Middleware

### Error Middleware Pattern
```javascript
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500
    }
  });
}

app.use(errorHandler); // Must be last
```

### Custom Error Class
```javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    Error.captureStackTrace(this, this.constructor);
  }
}
```

---

## AsyncHandler Pattern

### Wrapper Function
```javascript
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Usage
app.get('/users', asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
}));
```

### Benefits
- Eliminates try-catch in every route
- Automatically catches errors
- Passes errors to error middleware

---

## Key Takeaways

1. Use async/await for cleaner code
2. Always handle errors properly
3. Centralize error handling with middleware
4. Use asyncHandler to reduce boilerplate
5. Create custom error classes for better error handling

