# Node.js Interview Questions & Answers

## Table of Contents
- [Basic Level Questions](#basic-level-questions)
- [Intermediate Level Questions](#intermediate-level-questions)
- [Advanced Level Questions](#advanced-level-questions)
- [Practical Scenarios](#practical-scenarios)

---

## Basic Level Questions

### 1. What is Node.js?

**Answer:** Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side. Key characteristics:

- **Event-driven architecture** - Uses events to trigger actions
- **Non-blocking I/O** - Asynchronous operations don't block execution
- **Single-threaded** - Uses one thread with event loop
- **NPM** - Largest package ecosystem
- **Cross-platform** - Runs on Windows, Linux, macOS

**Use Cases:**
- RESTful APIs
- Real-time applications (chat, gaming)
- Microservices
- Streaming applications
- Server-side rendering

---

### 2. What is the Event Loop in Node.js?

**Answer:** The Event Loop is the mechanism that allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded.

**Phases of Event Loop:**
```
   ┌───────────────────────────┐
┌─>│           timers          │ (setTimeout, setInterval)
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │ (I/O callbacks)
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │ (internal use)
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │           poll            │ (retrieve new I/O events)
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │           check           │ (setImmediate)
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │ (socket.on('close'))
   └───────────────────────────┘
```

**Example:**
```javascript
console.log('1');

setTimeout(() => {
    console.log('2');
}, 0);

Promise.resolve().then(() => {
    console.log('3');
});

console.log('4');

// Output: 1, 4, 3, 2
// Explanation: Synchronous first, then microtasks (promises), then macrotasks (setTimeout)
```

---

### 3. What is the difference between setImmediate() and setTimeout()?

**Answer:**

**setImmediate():**
- Executes in the check phase of event loop
- Executes after I/O events
- Designed for executing code after the current poll phase

**setTimeout():**
- Executes in the timers phase
- Has minimum delay (even with 0ms)
- Subject to system timing

```javascript
setImmediate(() => {
    console.log('setImmediate');
});

setTimeout(() => {
    console.log('setTimeout');
}, 0);

// Order can vary in main module, but setImmediate is always 
// first inside I/O cycle
```

---

### 4. What are Streams in Node.js?

**Answer:** Streams are objects that let you read data from a source or write data to a destination continuously. They're efficient for handling large amounts of data.

**Types of Streams:**

1. **Readable** - Read data from source
```javascript
const fs = require('fs');
const readStream = fs.createReadStream('file.txt');
readStream.on('data', (chunk) => console.log(chunk));
```

2. **Writable** - Write data to destination
```javascript
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Hello');
writeStream.end();
```

3. **Duplex** - Both readable and writable
```javascript
const net = require('net');
const socket = net.Socket(); // Duplex stream
```

4. **Transform** - Modify data while reading/writing
```javascript
const { Transform } = require('stream');
const upperCase = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});
```

**Benefits:**
- Memory efficient (process data in chunks)
- Time efficient (don't wait for entire data)
- Composable (pipe streams together)

---

### 5. What is the difference between process.nextTick() and setImmediate()?

**Answer:**

**process.nextTick():**
- Executes immediately after current operation
- Before event loop continues
- Priority over I/O events
- Can cause I/O starvation if used recursively

**setImmediate():**
- Executes in next iteration of event loop
- After I/O events
- Safer for recursive calls

```javascript
setImmediate(() => console.log('setImmediate'));
process.nextTick(() => console.log('nextTick'));
console.log('main');

// Output: main, nextTick, setImmediate
```

**When to use:**
- `process.nextTick()` - Execute before any async operations
- `setImmediate()` - Execute after I/O operations

---

### 6. What is package.json?

**Answer:** package.json is a metadata file in Node.js projects that contains:

**Key Fields:**
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "My application",
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
    "nodemon": "^2.0.0"
  },
  "keywords": ["node", "app"],
  "author": "Your Name",
  "license": "MIT"
}
```

**Important Fields:**
- `name` - Package name
- `version` - Semantic versioning (major.minor.patch)
- `main` - Entry point
- `scripts` - Custom commands
- `dependencies` - Production dependencies
- `devDependencies` - Development dependencies

**Version Prefixes:**
- `~1.2.3` - Install 1.2.x (latest patch)
- `^1.2.3` - Install 1.x.x (latest minor)
- `1.2.3` - Install exact version

---

### 7. What is the purpose of module.exports?

**Answer:** `module.exports` is used to export functions, objects, or values from a module so they can be used in other files.

**Exporting:**
```javascript
// math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Method 1: Object
module.exports = {
    add,
    subtract
};

// Method 2: Individual exports
exports.add = add;
exports.subtract = subtract;

// Method 3: Single function
module.exports = add;
```

**Importing:**
```javascript
// app.js
const math = require('./math');
console.log(math.add(2, 3)); // 5

// Or destructure
const { add, subtract } = require('./math');
console.log(add(2, 3)); // 5
```

**module.exports vs exports:**
- `module.exports` - The actual object exported
- `exports` - Reference to module.exports
- Can reassign `module.exports`, but not `exports`

---

### 8. What is NPM?

**Answer:** NPM (Node Package Manager) is the default package manager for Node.js.

**Key Features:**
- Install packages/dependencies
- Manage project dependencies
- Publish packages
- Run scripts
- Version management

**Common Commands:**
```bash
npm init                    # Initialize project
npm install express         # Install package
npm install -D nodemon     # Install dev dependency
npm install                # Install all dependencies
npm update                 # Update packages
npm uninstall express      # Remove package
npm list                   # List installed packages
npm run dev                # Run script
npm publish                # Publish package
```

**package-lock.json:**
- Locks exact dependency versions
- Ensures consistent installations
- Auto-generated, committed to repo

---

### 9. What is callback hell and how to avoid it?

**Answer:** Callback hell is when callbacks are nested within callbacks, making code hard to read and maintain.

**Problem:**
```javascript
// Callback hell (Pyramid of Doom)
getData(function(a) {
    getMoreData(a, function(b) {
        getMoreData(b, function(c) {
            getMoreData(c, function(d) {
                getMoreData(d, function(e) {
                    // Do something
                });
            });
        });
    });
});
```

**Solutions:**

**1. Named Functions:**
```javascript
function handleA(a) {
    getMoreData(a, handleB);
}
function handleB(b) {
    getMoreData(b, handleC);
}
getData(handleA);
```

**2. Promises:**
```javascript
getData()
    .then(a => getMoreData(a))
    .then(b => getMoreData(b))
    .then(c => getMoreData(c))
    .catch(err => console.error(err));
```

**3. Async/Await:**
```javascript
async function fetchData() {
    try {
        const a = await getData();
        const b = await getMoreData(a);
        const c = await getMoreData(b);
        return c;
    } catch (err) {
        console.error(err);
    }
}
```

---

### 10. What is middleware in Express?

**Answer:** Middleware functions have access to the request, response, and next middleware in the application's request-response cycle.

**Types:**

**1. Application-level:**
```javascript
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});
```

**2. Router-level:**
```javascript
router.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method);
    next();
});
```

**3. Error-handling:**
```javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

**4. Built-in:**
```javascript
app.use(express.json());
app.use(express.static('public'));
```

**5. Third-party:**
```javascript
const morgan = require('morgan');
app.use(morgan('dev'));
```

**Execution Flow:**
```javascript
app.use(middleware1);  // Executes first
app.use(middleware2);  // Executes second
app.get('/', handler); // Executes last
```

---

## Intermediate Level Questions

### 11. Explain the difference between fork() and spawn()

**Answer:** Both are methods from the `child_process` module for creating child processes.

**spawn():**
- Launches a new process
- Streams data (efficient for large output)
- Returns a stream-based interface

```javascript
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`Process exited with code ${code}`);
});
```

**fork():**
- Special case of spawn for Node.js processes
- Creates new V8 instance
- Built-in IPC channel
- Can send messages between parent and child

```javascript
const { fork } = require('child_process');
const child = fork('child.js');

child.on('message', (msg) => {
    console.log('Message from child:', msg);
});

child.send({ hello: 'world' });
```

**Key Differences:**
| Feature | spawn() | fork() |
|---------|---------|--------|
| Purpose | Any command | Node.js scripts |
| Communication | Streams | IPC channel |
| Memory | Efficient | New V8 instance |
| Use case | Shell commands | CPU-intensive tasks |

---

### 12. What is clustering in Node.js?

**Answer:** Clustering allows you to create multiple child processes (workers) that share the same server port, taking advantage of multi-core systems.

**Benefits:**
- Utilize all CPU cores
- Increase application throughput
- Improve reliability (if one worker crashes, others continue)
- Load balancing

**Example:**
```javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    
    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork(); // Restart worker
    });
} else {
    // Workers share TCP connection
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello World\n');
    }).listen(8000);
    
    console.log(`Worker ${process.pid} started`);
}
```

**Load Balancing Strategies:**
- Round-robin (default on all platforms except Windows)
- Operating system's scheduling

---

### 13. What is the purpose of Buffer in Node.js?

**Answer:** Buffer is a temporary storage for binary data. It's used when working with streams, file systems, or network operations.

**Why Buffer?**
- JavaScript doesn't handle binary data well
- Needed for TCP streams and file system operations
- Fixed-size memory allocation outside V8 heap

**Creating Buffers:**
```javascript
// Create buffer of size 10
const buf1 = Buffer.alloc(10);

// Create buffer with content
const buf2 = Buffer.from('Hello');

// Create unsafe buffer (faster but may contain old data)
const buf3 = Buffer.allocUnsafe(10);

// From array
const buf4 = Buffer.from([1, 2, 3, 4]);
```

**Operations:**
```javascript
const buf = Buffer.from('Hello World');

// Length
console.log(buf.length); // 11

// To string
console.log(buf.toString()); // 'Hello World'

// Slice
const slice = buf.slice(0, 5);
console.log(slice.toString()); // 'Hello'

// Write
buf.write('Hi', 0);
console.log(buf.toString()); // 'Hi World'

// Compare
const buf1 = Buffer.from('abc');
const buf2 = Buffer.from('abd');
console.log(buf1.compare(buf2)); // -1

// Concatenate
const combined = Buffer.concat([buf1, buf2]);
```

---

### 14. How do you handle errors in Node.js?

**Answer:** Error handling in Node.js can be done in multiple ways:

**1. Try-Catch (Synchronous):**
```javascript
try {
    const data = JSON.parse(invalidJSON);
} catch (err) {
    console.error('Parse error:', err.message);
}
```

**2. Error-First Callbacks:**
```javascript
fs.readFile('file.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});
```

**3. Promises:**
```javascript
fetchData()
    .then(data => processData(data))
    .catch(err => console.error('Error:', err));
```

**4. Async/Await:**
```javascript
async function getData() {
    try {
        const data = await fetchData();
        return data;
    } catch (err) {
        console.error('Error:', err);
        throw err;
    }
}
```

**5. Event Emitters:**
```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('error', (err) => {
    console.error('Event error:', err);
});

emitter.emit('error', new Error('Something went wrong'));
```

**6. Global Error Handlers:**
```javascript
// Uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});

// Unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
    process.exit(1);
});
```

**Best Practices:**
- Always handle errors
- Use custom error classes
- Log errors appropriately
- Don't swallow errors silently
- Graceful shutdown on critical errors

---

### 15. What is the purpose of __dirname and __filename?

**Answer:**

**__dirname:**
- Absolute path of directory containing the currently executing file
- Useful for constructing file paths

**__filename:**
- Absolute path of currently executing file
- Includes filename

**Example:**
```javascript
console.log(__dirname);
// /Users/username/projects/myapp

console.log(__filename);
// /Users/username/projects/myapp/server.js

// Safe file path construction
const path = require('path');
const filePath = path.join(__dirname, 'data', 'users.json');

// Read file relative to current module
const fs = require('fs');
const data = fs.readFileSync(path.join(__dirname, 'config.json'));
```

**Note:** Not available in ES modules. Use `import.meta.url` instead:
```javascript
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

---

### 16. Explain the concept of Event Emitters

**Answer:** Event Emitters are objects that emit named events causing previously registered listeners to be called.

**Core Concept:**
```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Register listener
myEmitter.on('event', (arg) => {
    console.log('Event occurred:', arg);
});

// Emit event
myEmitter.emit('event', 'data');
```

**Common Methods:**
```javascript
// on() - Register listener
emitter.on('data', listener);

// once() - Register one-time listener
emitter.once('data', listener);

// emit() - Trigger event
emitter.emit('data', payload);

// off() / removeListener() - Remove listener
emitter.off('data', listener);

// removeAllListeners() - Remove all
emitter.removeAllListeners('data');

// listenerCount() - Count listeners
emitter.listenerCount('data');
```

**Real-World Example:**
```javascript
const fs = require('fs');
const readStream = fs.createReadStream('file.txt');

readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
    console.log('Finished reading');
});

readStream.on('error', (err) => {
    console.error('Error:', err);
});
```

**Custom Event Emitter:**
```javascript
class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('logged', { message, timestamp: Date.now() });
    }
}

const logger = new Logger();

logger.on('logged', (data) => {
    // Save to database
    console.log('Log saved:', data);
});

logger.log('User logged in');
```

---

### 17. What is the difference between readFile and createReadStream?

**Answer:**

**readFile():**
- Reads entire file into memory
- Suitable for small files
- Returns complete data at once
- Higher memory usage

```javascript
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // Entire file content
});
```

**createReadStream():**
- Reads file in chunks
- Suitable for large files
- Streams data progressively
- Lower memory usage

```javascript
const stream = fs.createReadStream('largefile.txt', { highWaterMark: 16 * 1024 });

stream.on('data', (chunk) => {
    console.log('Received chunk:', chunk.length);
});

stream.on('end', () => {
    console.log('Finished reading');
});
```

**Comparison:**
| Feature | readFile | createReadStream |
|---------|----------|------------------|
| Memory | High | Low |
| Speed | Fast for small files | Fast for large files |
| Control | Less | More (pause, resume) |
| Use case | Small files | Large files |

**When to use which:**
- **readFile**: Configuration files, small JSON files
- **createReadStream**: Video files, logs, large datasets

---

### 18. What are Promises in Node.js?

**Answer:** Promises represent the eventual completion or failure of an asynchronous operation.

**States:**
- **Pending** - Initial state
- **Fulfilled** - Operation completed successfully
- **Rejected** - Operation failed

**Creating Promises:**
```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Operation successful');
        } else {
            reject(new Error('Operation failed'));
        }
    }, 1000);
});

promise
    .then(result => console.log(result))
    .catch(err => console.error(err))
    .finally(() => console.log('Done'));
```

**Promise Methods:**
```javascript
// Promise.all - Wait for all promises
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results));

// Promise.race - First to complete
Promise.race([promise1, promise2])
    .then(result => console.log(result));

// Promise.allSettled - Wait for all, don't fail fast
Promise.allSettled([promise1, promise2])
    .then(results => console.log(results));

// Promise.any - First to fulfill
Promise.any([promise1, promise2])
    .then(result => console.log(result));
```

**Promisifying Callbacks:**
```javascript
const { promisify } = require('util');
const fs = require('fs');

const readFileAsync = promisify(fs.readFile);

readFileAsync('file.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.error(err));
```

---

### 19. What is the difference between dependencies and devDependencies?

**Answer:**

**dependencies:**
- Required to run the application
- Installed in production
- Examples: express, mongoose, react

```bash
npm install express
# or
npm install express --save
```

**devDependencies:**
- Only needed for development
- Not installed in production (npm install --production)
- Examples: testing libraries, build tools

```bash
npm install jest --save-dev
# or
npm install -D jest
```

**package.json Example:**
```json
{
  "dependencies": {
    "express": "^4.18.0",
    "mongoose": "^6.0.0"
  },
  "devDependencies": {
    "jest": "^28.0.0",
    "nodemon": "^2.0.0",
    "eslint": "^8.0.0"
  }
}
```

**Production Installation:**
```bash
npm install --production
# Only installs dependencies, not devDependencies
```

---

### 20. How do you debug a Node.js application?

**Answer:**

**1. Console.log (Basic):**
```javascript
console.log('Debug point 1');
console.log('Variable value:', myVariable);
console.error('Error occurred');
```

**2. Node.js Debugger:**
```javascript
// Add debugger statement
function myFunction() {
    debugger; // Execution pauses here
    // your code
}

// Run with inspect
node inspect app.js
```

**3. Chrome DevTools:**
```bash
node --inspect app.js
# Open chrome://inspect in Chrome
```

**4. VS Code Debugger:**
```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/app.js"
    }
  ]
}
```

**5. Debug Module:**
```javascript
const debug = require('debug')('app:server');

debug('Server starting on port 3000');

// Run with: DEBUG=app:* node app.js
```

**6. Winston/Bunyan (Logging):**
```javascript
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

logger.info('Server started');
logger.error('Error occurred', { error: err });
```

---

## Advanced Level Questions

### 21. Explain memory leaks in Node.js and how to prevent them

**Answer:** Memory leaks occur when memory that's no longer needed is not released.

**Common Causes:**

**1. Global Variables:**
```javascript
// ❌ Bad
global.cache = {};
function addToCache(key, value) {
    cache[key] = value; // Never cleaned up
}

// ✅ Good
const cache = new Map();
function addToCache(key, value) {
    cache.set(key, value);
}
function clearOldEntries() {
    // Implement cleanup logic
}
```

**2. Unclosed Connections:**
```javascript
// ❌ Bad
app.get('/data', async (req, res) => {
    const connection = await db.connect();
    const data = await connection.query();
    res.json(data);
    // Connection not closed!
});

// ✅ Good
app.get('/data', async (req, res) => {
    const connection = await db.connect();
    try {
        const data = await connection.query();
        res.json(data);
    } finally {
        await connection.close();
    }
});
```

**3. Event Listeners:**
```javascript
// ❌ Bad
eventEmitter.on('data', handler); // Never removed

// ✅ Good
eventEmitter.once('data', handler); // Auto-removed
// or
eventEmitter.removeListener('data', handler);
```

**4. Closures:**
```javascript
// ❌ Bad
function createHandler() {
    const largeData = new Array(1000000).fill('x');
    return function() {
        console.log(largeData.length); // Keeps largeData in memory
    };
}

// ✅ Good
function createHandler() {
    const largeData = new Array(1000000).fill('x');
    const length = largeData.length;
    return function() {
        console.log(length); // Only keeps number
    };
}
```

**Detection Tools:**
- Node.js --inspect with Chrome DevTools
- Heap snapshots
- Memory profiling
- Tools: clinic.js, node-memwatch

**Prevention:**
- Use weak references (WeakMap, WeakSet)
- Clean up timers and intervals
- Remove event listeners
- Close database connections
- Limit cache size
- Use streaming for large data

---

### 22. What is Worker Threads and when to use them?

**Answer:** Worker Threads allow running JavaScript in parallel on separate threads, useful for CPU-intensive tasks.

**Use Cases:**
- Image processing
- Video encoding
- Data encryption
- Complex calculations
- PDF generation

**Example:**
```javascript
// main.js
const { Worker } = require('worker_threads');

function runWorker(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', { workerData });
        
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    });
}

async function main() {
    const result = await runWorker({ num: 10 });
    console.log('Result:', result);
}

main();
```

```javascript
// worker.js
const { parentPort, workerData } = require('worker_threads');

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(workerData.num);
parentPort.postMessage(result);
```

**Worker Threads vs Cluster:**
- **Worker Threads**: Share memory, CPU-intensive
- **Cluster**: Separate processes, I/O-intensive

---

### 23. Explain how Node.js handles concurrency

**Answer:** Node.js handles concurrency through:

**1. Event Loop:**
- Single-threaded event loop
- Non-blocking I/O operations
- Callbacks/Promises for async operations

**2. Libuv Thread Pool:**
- Default: 4 threads
- Handles file I/O, DNS, crypto
- Can adjust: `UV_THREADPOOL_SIZE=8`

**3. Asynchronous Operations:**
```javascript
// These run concurrently
Promise.all([
    fetchUser(1),
    fetchUser(2),
    fetchUser(3)
]).then(users => console.log(users));
```

**4. Worker Threads:**
- For CPU-intensive tasks
- True parallelism

**5. Clustering:**
- Multiple processes
- Load balancing across cores

**Example:**
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    // This doesn't block other requests
    setTimeout(() => {
        res.end('Hello after 5 seconds');
    }, 5000);
});

server.listen(3000);
// Can handle thousands of concurrent requests
```

---

## Practical Scenarios

### 24. How would you implement rate limiting in Node.js?

**Answer:**

**Using express-rate-limit:**
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});

app.use('/api/', limiter);
```

**Custom Implementation with Redis:**
```javascript
const redis = require('redis');
const client = redis.createClient();

async function rateLimiter(req, res, next) {
    const ip = req.ip;
    const key = `rate_limit:${ip}`;
    
    const current = await client.incr(key);
    
    if (current === 1) {
        await client.expire(key, 60); // 60 seconds window
    }
    
    if (current > 100) {
        return res.status(429).json({ error: 'Too many requests' });
    }
    
    next();
}

app.use(rateLimiter);
```

---

### 25. How do you implement caching in Node.js?

**Answer:**

**In-Memory Caching:**
```javascript
const cache = new Map();

async function getCachedData(key) {
    if (cache.has(key)) {
        return cache.get(key);
    }
    
    const data = await fetchFromDatabase(key);
    cache.set(key, data);
    
    return data;
}
```

**Redis Caching:**
```javascript
const redis = require('redis');
const client = redis.createClient();

async function getCachedUser(userId) {
    const cacheKey = `user:${userId}`;
    
    // Try cache first
    const cached = await client.get(cacheKey);
    if (cached) {
        return JSON.parse(cached);
    }
    
    // Fetch from DB
    const user = await db.users.findById(userId);
    
    // Store in cache
    await client.setEx(cacheKey, 3600, JSON.stringify(user));
    
    return user;
}
```

---

**Next Steps:**
- Review [Node.js Overview](./overview.md)
- Practice with [Code Examples](./code-examples/)
- Build real projects

