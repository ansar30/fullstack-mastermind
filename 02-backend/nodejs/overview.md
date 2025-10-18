# Node.js - Complete Guide

## Table of Contents
1. [Introduction to Node.js](#introduction-to-nodejs)
2. [Core Modules](#core-modules)
3. [File System](#file-system)
4. [Events](#events)
5. [Streams](#streams)
6. [HTTP Module](#http-module)
7. [NPM & Package Management](#npm--package-management)
8. [Asynchronous Programming](#asynchronous-programming)
9. [Error Handling](#error-handling)
10. [Best Practices](#best-practices)

---

## Introduction to Node.js

Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows you to run JavaScript on the server side.

### Key Features
- **Asynchronous and Event-Driven** - Non-blocking I/O
- **Single-Threaded** - Uses event loop for concurrency
- **Fast Execution** - V8 engine compiles JavaScript to machine code
- **NPM** - Largest ecosystem of open source libraries
- **Cross-Platform** - Runs on Windows, Linux, macOS

### When to Use Node.js
✅ **Good for:**
- RESTful APIs
- Real-time applications (chat, gaming)
- Microservices
- Streaming applications
- I/O-heavy operations
- Server-side rendering (SSR)

❌ **Not ideal for:**
- CPU-intensive tasks
- Heavy computation
- Blocking operations

### Basic Setup

```javascript
// app.js
console.log('Hello, Node.js!');

// Run with: node app.js
```

---

## Core Modules

Node.js comes with built-in modules that don't require installation.

### Path Module

```javascript
const path = require('path');

// Join paths
const filePath = path.join(__dirname, 'files', 'data.txt');
console.log(filePath);

// Get file extension
const ext = path.extname('file.txt'); // .txt

// Get filename
const filename = path.basename('/path/to/file.txt'); // file.txt

// Get directory name
const dirname = path.dirname('/path/to/file.txt'); // /path/to

// Parse path
const parsed = path.parse('/path/to/file.txt');
/*
{
  root: '/',
  dir: '/path/to',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/

// Resolve to absolute path
const absolute = path.resolve('file.txt');

// Check if path is absolute
path.isAbsolute('/path'); // true
path.isAbsolute('./path'); // false
```

### OS Module

```javascript
const os = require('os');

// Platform info
console.log(os.platform()); // linux, darwin, win32
console.log(os.arch()); // x64, arm, etc.

// CPU info
console.log(os.cpus());

// Memory info
console.log(os.totalmem()); // Total memory in bytes
console.log(os.freemem()); // Free memory in bytes

// User info
console.log(os.userInfo());

// Uptime
console.log(os.uptime()); // System uptime in seconds

// Home directory
console.log(os.homedir());
```

### URL Module

```javascript
const url = require('url');

const myUrl = new URL('https://example.com:8080/path?name=John&age=30#section');

console.log(myUrl.href); // Full URL
console.log(myUrl.protocol); // https:
console.log(myUrl.host); // example.com:8080
console.log(myUrl.hostname); // example.com
console.log(myUrl.port); // 8080
console.log(myUrl.pathname); // /path
console.log(myUrl.search); // ?name=John&age=30
console.log(myUrl.searchParams); // URLSearchParams
console.log(myUrl.hash); // #section

// Query params
myUrl.searchParams.get('name'); // John
myUrl.searchParams.append('city', 'NYC');
```

---

## File System

The `fs` module allows you to work with the file system.

### Reading Files

```javascript
const fs = require('fs');
const path = require('path');

// Synchronous (blocks execution)
try {
    const data = fs.readFileSync('file.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}

// Asynchronous (non-blocking)
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Promise-based (modern approach)
const fsPromises = require('fs').promises;

async function readFileAsync() {
    try {
        const data = await fsPromises.readFile('file.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
```

### Writing Files

```javascript
const fs = require('fs');

// Write file (overwrite)
fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('File written!');
});

// Append to file
fs.appendFile('output.txt', '\nNew line', (err) => {
    if (err) throw err;
    console.log('Content appended!');
});

// Write file synchronously
fs.writeFileSync('output.txt', 'Hello!');
```

### File Operations

```javascript
const fs = require('fs');

// Check if file exists
fs.existsSync('file.txt'); // true or false

// Get file stats
fs.stat('file.txt', (err, stats) => {
    if (err) throw err;
    
    console.log(stats.isFile()); // true
    console.log(stats.isDirectory()); // false
    console.log(stats.size); // File size in bytes
    console.log(stats.mtime); // Last modified time
});

// Rename/Move file
fs.rename('old.txt', 'new.txt', (err) => {
    if (err) throw err;
    console.log('File renamed!');
});

// Delete file
fs.unlink('file.txt', (err) => {
    if (err) throw err;
    console.log('File deleted!');
});

// Copy file
fs.copyFile('source.txt', 'dest.txt', (err) => {
    if (err) throw err;
    console.log('File copied!');
});
```

### Directory Operations

```javascript
const fs = require('fs');

// Create directory
fs.mkdir('newFolder', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Directory created!');
});

// Read directory
fs.readdir('./', (err, files) => {
    if (err) throw err;
    console.log(files); // Array of filenames
});

// Remove directory
fs.rmdir('folder', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Directory removed!');
});
```

---

## Events

Node.js is event-driven. The `events` module allows you to create and handle custom events.

```javascript
const EventEmitter = require('events');

// Create emitter
const emitter = new EventEmitter();

// Register listener
emitter.on('message', (data) => {
    console.log('Message received:', data);
});

// Register one-time listener
emitter.once('greeting', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit event
emitter.emit('message', 'Hello, World!');
emitter.emit('greeting', 'John');
emitter.emit('greeting', 'Jane'); // Won't trigger (once)

// Remove listener
const callback = (data) => console.log(data);
emitter.on('event', callback);
emitter.off('event', callback);

// Custom EventEmitter class
class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('logged', { message, timestamp: Date.now() });
    }
}

const logger = new Logger();
logger.on('logged', (data) => {
    console.log('Log event:', data);
});
logger.log('Hello!');
```

---

## Streams

Streams allow you to process data in chunks rather than loading everything into memory.

### Types of Streams
1. **Readable** - Read data from source
2. **Writable** - Write data to destination
3. **Duplex** - Both readable and writable
4. **Transform** - Modify data as it's read/written

### Reading Streams

```javascript
const fs = require('fs');

// Create read stream
const readStream = fs.createReadStream('large-file.txt', {
    encoding: 'utf8',
    highWaterMark: 64 * 1024 // 64KB chunks
});

// Listen for data
readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk.length);
});

readStream.on('end', () => {
    console.log('Finished reading');
});

readStream.on('error', (err) => {
    console.error('Error:', err);
});
```

### Writing Streams

```javascript
const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello, ');
writeStream.write('World!');
writeStream.end(); // Close stream

writeStream.on('finish', () => {
    console.log('Finished writing');
});
```

### Piping Streams

```javascript
const fs = require('fs');

// Copy file using streams
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

// Chain multiple streams
readStream
    .pipe(transformStream)
    .pipe(writeStream);
```

### Transform Streams

```javascript
const { Transform } = require('stream');

// Create transform stream (uppercase)
const upperCaseStream = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin
    .pipe(upperCaseStream)
    .pipe(process.stdout);
```

---

## HTTP Module

Create HTTP servers and make HTTP requests.

### Creating a Server

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    // Request properties
    console.log(req.method); // GET, POST, etc.
    console.log(req.url); // /path
    console.log(req.headers);
    
    // Set response headers
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    
    // Send response
    res.write('<h1>Hello, World!</h1>');
    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

### Routing

```javascript
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    
    // Set JSON response
    res.setHeader('Content-Type', 'application/json');
    
    if (pathname === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Home page' }));
    } else if (pathname === '/api/users' && req.method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ users: ['John', 'Jane'] }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Not found' }));
    }
});

server.listen(3000);
```

### Handling POST Requests

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/api/data') {
        let body = '';
        
        // Collect data chunks
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        
        // All data received
        req.on('end', () => {
            const data = JSON.parse(body);
            console.log('Received:', data);
            
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 201;
            res.end(JSON.stringify({
                message: 'Data received',
                data
            }));
        });
    }
});

server.listen(3000);
```

---

## NPM & Package Management

### package.json

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "My Node.js application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0",
    "jest": "^28.0.0"
  },
  "keywords": ["node", "api"],
  "author": "Your Name",
  "license": "MIT"
}
```

### NPM Commands

```bash
# Initialize project
npm init
npm init -y # Skip questions

# Install packages
npm install express
npm install -D nodemon # Dev dependency
npm install -g pm2 # Global install

# Install from package.json
npm install

# Update packages
npm update
npm update express

# Remove packages
npm uninstall express

# List installed packages
npm list
npm list --depth=0 # Top level only

# Check outdated packages
npm outdated

# Run scripts
npm start
npm run dev
npm test

# Publish package
npm publish
```

### Environment Variables

```javascript
// .env file
PORT=3000
DB_HOST=localhost
DB_USER=admin

// Using dotenv package
require('dotenv').config();

const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST;

console.log(`Server running on port ${port}`);
```

---

## Asynchronous Programming

### Callbacks

```javascript
function fetchUser(id, callback) {
    setTimeout(() => {
        const user = { id, name: 'John' };
        callback(null, user); // null = no error
    }, 1000);
}

fetchUser(1, (err, user) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(user);
});
```

### Promises

```javascript
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                resolve({ id, name: 'John' });
            } else {
                reject(new Error('ID required'));
            }
        }, 1000);
    });
}

fetchUser(1)
    .then(user => console.log(user))
    .catch(err => console.error(err));
```

### Async/Await

```javascript
async function getUser(id) {
    try {
        const user = await fetchUser(id);
        const posts = await fetchPosts(user.id);
        return { user, posts };
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// Parallel execution
async function getAllData() {
    try {
        const [users, posts, comments] = await Promise.all([
            fetchUsers(),
            fetchPosts(),
            fetchComments()
        ]);
        return { users, posts, comments };
    } catch (err) {
        console.error(err);
    }
}
```

---

## Error Handling

### Try-Catch

```javascript
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw or handle
    }
}
```

### Error-First Callbacks

```javascript
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});
```

### Custom Errors

```javascript
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
        this.statusCode = 400;
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotFoundError';
        this.statusCode = 404;
    }
}

// Usage
function getUserById(id) {
    if (!id) {
        throw new ValidationError('User ID is required');
    }
    
    const user = database.find(id);
    if (!user) {
        throw new NotFoundError('User not found');
    }
    
    return user;
}

try {
    const user = getUserById();
} catch (error) {
    if (error instanceof ValidationError) {
        console.log('Validation error:', error.message);
    } else if (error instanceof NotFoundError) {
        console.log('Not found:', error.message);
    } else {
        console.log('Unknown error:', error);
    }
}
```

### Process Error Handling

```javascript
// Uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});

// Unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});
```

---

## Best Practices

### 1. Project Structure

```
project/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── config/
├── tests/
├── .env
├── .gitignore
├── package.json
└── README.md
```

### 2. Environment Variables

```javascript
// config/config.js
module.exports = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        name: process.env.DB_NAME || 'myapp'
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiry: process.env.JWT_EXPIRY || '24h'
    }
};
```

### 3. Error Handling Middleware

```javascript
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    
    res.status(statusCode).json({
        error: {
            message,
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
        }
    });
};

module.exports = errorHandler;
```

### 4. Async Error Handling

```javascript
// utils/asyncHandler.js
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

// Usage
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.json(users);
});
```

### 5. Logging

```javascript
// Using Winston
const winston = require('winston');

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

module.exports = logger;
```

### 6. Security Best Practices

```javascript
// Use helmet for security headers
const helmet = require('helmet');
app.use(helmet());

// Rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Input validation
const { body, validationResult } = require('express-validator');

app.post('/user', [
    body('email').isEmail(),
    body('password').isLength({ min: 8 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Process request
});

// Sanitize user input
const mongoSanitize = require('express-mongo-sanitize');
app.use(mongoSanitize());
```

---

**Next Steps:**
- Review [Interview Questions](./interview-questions.md)
- Practice with [Code Examples](./code-examples/)
- Check the [Cheatsheet](./cheatsheet.md)

