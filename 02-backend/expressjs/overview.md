# Express.js - Complete Guide

## Table of Contents
1. [Introduction to Express](#introduction-to-express)
2. [Getting Started](#getting-started)
3. [Routing](#routing)
4. [Middleware](#middleware)
5. [Request and Response](#request-and-response)
6. [Error Handling](#error-handling)
7. [Template Engines](#template-engines)
8. [Best Practices](#best-practices)

---

## Introduction to Express

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### Why Express?
- **Minimal** - Lightweight and unopinionated
- **Fast** - High performance
- **Middleware** - Extensible through middleware
- **Routing** - Powerful routing system
- **Popular** - Large community and ecosystem
- **Template Support** - Works with various template engines

### Basic Setup

```bash
# Initialize project
npm init -y

# Install Express
npm install express

# Development dependencies
npm install -D nodemon
```

```javascript
// app.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

---

## Getting Started

### Project Structure

```
myapp/
├── config/
│   └── database.js
├── controllers/
│   ├── userController.js
│   └── productController.js
├── models/
│   ├── User.js
│   └── Product.js
├── routes/
│   ├── users.js
│   └── products.js
├── middleware/
│   ├── auth.js
│   └── errorHandler.js
├── utils/
│   └── helpers.js
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── views/
├── .env
├── app.js
└── server.js
```

### Basic Application

```javascript
// server.js
const express = require('express');
const app = express();
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to API' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

---

## Routing

### Basic Routes

```javascript
// GET request
app.get('/users', (req, res) => {
    res.json({ message: 'Get all users' });
});

// POST request
app.post('/users', (req, res) => {
    const user = req.body;
    res.status(201).json({ message: 'User created', user });
});

// PUT request
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Update user ${id}` });
});

// DELETE request
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Delete user ${id}` });
});
```

### Route Parameters

```javascript
// Single parameter
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ userId: id });
});

// Multiple parameters
app.get('/users/:userId/posts/:postId', (req, res) => {
    const { userId, postId } = req.params;
    res.json({ userId, postId });
});

// Optional parameters
app.get('/users/:id?', (req, res) => {
    if (req.params.id) {
        res.json({ userId: req.params.id });
    } else {
        res.json({ message: 'All users' });
    }
});

// Pattern matching
app.get('/files/:filename(*.pdf)', (req, res) => {
    res.json({ file: req.params.filename });
});
```

### Query Parameters

```javascript
// URL: /search?q=express&page=2&limit=10
app.get('/search', (req, res) => {
    const { q, page = 1, limit = 10 } = req.query;
    res.json({ query: q, page, limit });
});
```

### Router

```javascript
// routes/users.js
const express = require('express');
const router = express.Router();

// Middleware specific to this router
router.use((req, res, next) => {
    console.log('User route accessed');
    next();
});

router.get('/', (req, res) => {
    res.json({ message: 'Get all users' });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Get user ${req.params.id}` });
});

router.post('/', (req, res) => {
    res.status(201).json({ message: 'User created' });
});

module.exports = router;
```

```javascript
// app.js
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);
```

### Route Methods Chaining

```javascript
app.route('/users/:id')
    .get((req, res) => {
        res.json({ message: 'Get user' });
    })
    .put((req, res) => {
        res.json({ message: 'Update user' });
    })
    .delete((req, res) => {
        res.json({ message: 'Delete user' });
    });
```

---

## Middleware

Middleware functions have access to the request object (req), response object (res), and the next middleware function.

### Application-Level Middleware

```javascript
// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

// Authentication middleware
app.use((req, res, next) => {
    if (req.headers.authorization) {
        // Verify token
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
});
```

### Router-Level Middleware

```javascript
const router = express.Router();

// Middleware for this router
router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

// Middleware for specific route
router.get('/users/:id', authenticate, (req, res) => {
    res.json({ user: req.user });
});
```

### Built-in Middleware

```javascript
// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
```

### Third-Party Middleware

```javascript
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

// Logging
app.use(morgan('dev'));

// CORS
app.use(cors());

// Security headers
app.use(helmet());

// Compression
app.use(compression());
```

### Custom Middleware

```javascript
// Request timing
const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
};

app.use(requestTime);

// Validation middleware
const validateUser = (req, res, next) => {
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ 
            error: 'Name and email are required' 
        });
    }
    
    next();
};

app.post('/users', validateUser, (req, res) => {
    // Create user
});
```

### Error-Handling Middleware

```javascript
// Must have 4 parameters
app.use((err, req, res, next) => {
    console.error(err.stack);
    
    res.status(err.status || 500).json({
        error: {
            message: err.message,
            ...(process.env.NODE_ENV === 'development' && { 
                stack: err.stack 
            })
        }
    });
});
```

---

## Request and Response

### Request Object (req)

```javascript
app.get('/demo', (req, res) => {
    // URL parameters
    const { id } = req.params;
    
    // Query string
    const { page, limit } = req.query;
    
    // Request body
    const data = req.body;
    
    // Headers
    const token = req.headers.authorization;
    const contentType = req.get('Content-Type');
    
    // Cookies
    const sessionId = req.cookies.session;
    
    // Method
    const method = req.method;
    
    // Path
    const path = req.path;
    const url = req.url;
    const originalUrl = req.originalUrl;
    
    // IP
    const ip = req.ip;
    
    // Protocol
    const protocol = req.protocol; // 'http' or 'https'
    
    // Hostname
    const hostname = req.hostname;
    
    // Check content type
    const isJSON = req.is('json');
    
    res.json({ received: 'ok' });
});
```

### Response Object (res)

```javascript
app.get('/demo', (req, res) => {
    // Send response
    res.send('Hello');
    res.send({ message: 'Hello' });
    res.send(Buffer.from('Hello'));
    
    // JSON response
    res.json({ message: 'Success', data: [] });
    
    // Status code
    res.status(404).send('Not found');
    res.sendStatus(200); // Equivalent to res.status(200).send('OK')
    
    // Set headers
    res.set('Content-Type', 'text/html');
    res.set({
        'Content-Type': 'application/json',
        'X-Custom-Header': 'value'
    });
    
    // Cookies
    res.cookie('name', 'value', { maxAge: 900000, httpOnly: true });
    res.clearCookie('name');
    
    // Redirect
    res.redirect('/home');
    res.redirect(301, '/moved-permanently');
    
    // Send file
    res.sendFile('/path/to/file.pdf');
    
    // Download
    res.download('/path/to/file.pdf');
    res.download('/path/to/file.pdf', 'filename.pdf');
    
    // Render view
    res.render('index', { title: 'Home', user: req.user });
});
```

### Response Methods

```javascript
// Chain methods
res.status(201)
   .set('X-Custom-Header', 'value')
   .json({ message: 'Created' });

// Send different formats
app.get('/data', (req, res) => {
    res.format({
        'text/plain': () => res.send('Plain text'),
        'text/html': () => res.send('<p>HTML</p>'),
        'application/json': () => res.json({ message: 'JSON' }),
        default: () => res.status(406).send('Not Acceptable')
    });
});
```

---

## Error Handling

### Synchronous Errors

```javascript
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
});
```

### Asynchronous Errors

```javascript
// With try-catch
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// With error handler wrapper
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

app.get('/users/:id', asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}));
```

### Custom Error Class

```javascript
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        
        Error.captureStackTrace(this, this.constructor);
    }
}

// Usage
app.get('/users/:id', async (req, res, next) => {
    const user = await User.findById(req.params.id);
    
    if (!user) {
        return next(new AppError('User not found', 404));
    }
    
    res.json(user);
});
```

### Global Error Handler

```javascript
// Error handler middleware (must be last)
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    
    if (process.env.NODE_ENV === 'development') {
        res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack
        });
    } else {
        // Production
        if (err.isOperational) {
            res.status(err.statusCode).json({
                status: err.status,
                message: err.message
            });
        } else {
            console.error('ERROR 💥', err);
            res.status(500).json({
                status: 'error',
                message: 'Something went wrong'
            });
        }
    }
});
```

---

## Template Engines

### EJS

```bash
npm install ejs
```

```javascript
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home',
        user: { name: 'John' }
    });
});
```

```html
<!-- views/index.ejs -->
<!DOCTYPE html>
<html>
<head>
    <title><%= title %></title>
</head>
<body>
    <h1>Welcome, <%= user.name %></h1>
    
    <% if (user.isAdmin) { %>
        <p>Admin panel</p>
    <% } %>
    
    <ul>
    <% items.forEach(item => { %>
        <li><%= item %></li>
    <% }); %>
    </ul>
</body>
</html>
```

### Pug

```bash
npm install pug
```

```javascript
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home', message: 'Hello' });
});
```

```pug
//- views/index.pug
doctype html
html
  head
    title= title
  body
    h1= message
    ul
      each item in items
        li= item
```

---

## Best Practices

### 1. Project Structure

```javascript
// Separate concerns
// routes/users.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', auth, userController.createUser);

module.exports = router;

// controllers/userController.js
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        next(err);
    }
};
```

### 2. Environment Variables

```javascript
require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    db: {
        uri: process.env.DB_URI,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || '7d'
    }
};

module.exports = config;
```

### 3. Security

```javascript
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');

// Security headers
app.use(helmet());

// Data sanitization against NoSQL injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Rate limiting
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests'
});
app.use('/api', limiter);
```

### 4. Validation

```javascript
const { body, validationResult } = require('express-validator');

app.post('/users',
    [
        body('email').isEmail().normalizeEmail(),
        body('password').isLength({ min: 8 }),
        body('name').trim().notEmpty()
    ],
    (req, res) => {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        // Process valid data
    }
);
```

### 5. Logging

```javascript
const morgan = require('morgan');
const winston = require('winston');

// Morgan for HTTP logs
app.use(morgan('combined'));

// Winston for application logs
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}
```

### 6. Graceful Shutdown

```javascript
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

process.on('SIGTERM', () => {
    console.log('SIGTERM received. Closing server gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    server.close(() => {
        process.exit(1);
    });
});
```

---

**Next Steps:**
- Review [Interview Questions](./interview-questions.md)
- Build REST APIs
- Implement authentication
- Add testing

