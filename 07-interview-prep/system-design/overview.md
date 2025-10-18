# System Design - Complete Guide

## Table of Contents
1. [Introduction to System Design](#introduction-to-system-design)
2. [Design Fundamentals](#design-fundamentals)
3. [Scalability](#scalability)
4. [Common Design Patterns](#common-design-patterns)
5. [System Design Process](#system-design-process)
6. [Common Interview Questions](#common-interview-questions)
7. [Real-World Examples](#real-world-examples)

---

## Introduction to System Design

System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements.

### Why System Design Matters

**For Interviews:**
- Tests problem-solving ability
- Assesses trade-off analysis
- Evaluates experience with large systems
- Shows communication skills

**For Real World:**
- Build scalable systems
- Handle growing user base
- Ensure reliability
- Optimize costs

### Key Concepts

**Scalability:** Ability to handle increased load
**Reliability:** System works correctly even when things fail
**Availability:** System is operational and accessible
**Maintainability:** Easy to modify and extend
**Efficiency:** Optimal use of resources

---

## Design Fundamentals

### 1. Load Balancing

Distribute traffic across multiple servers.

```
           Load Balancer
          /      |      \
      Server1  Server2  Server3
```

**Benefits:**
- No single point of failure
- Better resource utilization
- Horizontal scaling
- Reduced response time

**Algorithms:**
- **Round Robin:** Distribute requests sequentially
- **Least Connections:** Send to server with fewest connections
- **IP Hash:** Based on client IP
- **Weighted Round Robin:** Servers have weights based on capacity

**Example with Node.js + Nginx:**
```nginx
upstream backend {
    least_conn;
    server backend1.example.com weight=3;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
    }
}
```

---

### 2. Caching

Store frequently accessed data in fast-access storage.

**Cache Levels:**
```
Browser Cache → CDN Cache → Application Cache → Database Cache
```

**Strategies:**

**1. Cache-Aside (Lazy Loading)**
```javascript
async function getUser(userId) {
    // Check cache first
    let user = await cache.get(`user:${userId}`);
    
    if (user) {
        return user;
    }
    
    // If not in cache, fetch from DB
    user = await db.users.findById(userId);
    
    // Store in cache
    await cache.set(`user:${userId}`, user, 3600); // TTL: 1 hour
    
    return user;
}
```

**2. Write-Through Cache**
```javascript
async function updateUser(userId, data) {
    // Update database
    const user = await db.users.update(userId, data);
    
    // Update cache
    await cache.set(`user:${userId}`, user, 3600);
    
    return user;
}
```

**3. Write-Behind Cache**
```javascript
async function updateUser(userId, data) {
    // Update cache immediately
    await cache.set(`user:${userId}`, data);
    
    // Queue database update (async)
    queue.add('updateUser', { userId, data });
    
    return data;
}
```

**Cache Invalidation:**
- **TTL (Time To Live):** Data expires after set time
- **LRU (Least Recently Used):** Remove least accessed data
- **Manual:** Explicit cache invalidation

**Example with Redis:**
```javascript
const redis = require('redis');
const client = redis.createClient();

// Set with expiration
await client.setEx('user:123', 3600, JSON.stringify(userData));

// Get
const data = await client.get('user:123');

// Delete
await client.del('user:123');

// Pattern delete
const keys = await client.keys('user:*');
await Promise.all(keys.map(key => client.del(key)));
```

---

### 3. Database Scaling

**Vertical Scaling (Scale Up):**
- Add more CPU, RAM, storage to single server
- Limited by hardware
- Simpler but has ceiling

**Horizontal Scaling (Scale Out):**
- Add more database servers
- No single point of failure
- More complex

**Database Replication:**

**Master-Slave:**
```
Master (Write) → Slave1 (Read)
              → Slave2 (Read)
              → Slave3 (Read)
```

```javascript
// Read from replica
const userData = await readDB.users.find({ active: true });

// Write to master
const newUser = await writeDB.users.create({ name: 'John' });
```

**Database Sharding:**

Partition data across multiple databases.

```
Users A-M → Database 1
Users N-Z → Database 2
```

```javascript
function getShardKey(userId) {
    const firstLetter = userId[0].toUpperCase();
    return firstLetter <= 'M' ? 'shard1' : 'shard2';
}

async function getUser(userId) {
    const shard = getShardKey(userId);
    const db = databases[shard];
    return await db.users.findById(userId);
}
```

**Indexing:**
```sql
-- Create index for faster queries
CREATE INDEX idx_email ON users(email);
CREATE INDEX idx_name_age ON users(name, age);

-- Composite index
CREATE INDEX idx_user_posts ON posts(userId, createdAt DESC);
```

---

### 4. Message Queues

Asynchronous communication between services.

**Benefits:**
- Decouple services
- Handle traffic spikes
- Retry failed operations
- Process tasks asynchronously

**Example with RabbitMQ/Redis:**
```javascript
// Producer
async function sendEmail(to, subject, body) {
    await queue.add('sendEmail', {
        to,
        subject,
        body
    });
}

// Consumer
queue.process('sendEmail', async (job) => {
    const { to, subject, body } = job.data;
    
    try {
        await emailService.send(to, subject, body);
        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error('Failed to send email:', error);
        throw error; // Will retry based on config
    }
});
```

---

### 5. CDN (Content Delivery Network)

Distribute static content globally for faster access.

```
User (NYC) → CDN Edge (NYC) → Origin Server
User (London) → CDN Edge (London) → Origin Server
```

**Benefits:**
- Reduced latency
- Lower bandwidth costs
- Better availability
- DDoS protection

**Implementation:**
```javascript
// Store assets in S3
const imageUrl = await s3.upload(file);

// CloudFront URL
const cdnUrl = `https://cdn.example.com/${imageKey}`;
```

---

## Scalability

### Horizontal vs Vertical Scaling

**Vertical (Scale Up):**
```
Before: 2 CPU, 4GB RAM
After:  8 CPU, 32GB RAM
```
- Simpler
- Downtime required
- Hardware limit

**Horizontal (Scale Out):**
```
Before: 1 server
After:  10 servers
```
- More complex
- No downtime
- Unlimited scaling

### Stateless Architecture

Design services without server-side session state.

```javascript
// ❌ Stateful (session in server memory)
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

// ✅ Stateless (JWT token)
app.post('/login', async (req, res) => {
    const user = await authenticate(req.body);
    const token = jwt.sign({ userId: user.id }, SECRET);
    res.json({ token });
});

app.get('/profile', authenticateToken, async (req, res) => {
    const user = await getUser(req.user.userId);
    res.json(user);
});
```

### Microservices Architecture

Break application into small, independent services.

```
Monolith:
┌─────────────────────────┐
│ All Code in One App     │
│ - Auth                  │
│ - Users                 │
│ - Products              │
│ - Orders                │
└─────────────────────────┘

Microservices:
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│   Auth   │  │  Users   │  │ Products │  │  Orders  │
│ Service  │  │ Service  │  │ Service  │  │ Service  │
└──────────┘  └──────────┘  └──────────┘  └──────────┘
```

**Benefits:**
- Independent deployment
- Technology flexibility
- Better scalability
- Fault isolation

**Challenges:**
- Complex deployment
- Service communication
- Data consistency
- Monitoring

---

## Common Design Patterns

### 1. API Gateway Pattern

Single entry point for all client requests.

```
Client → API Gateway → [Auth Service]
                    → [User Service]
                    → [Product Service]
                    → [Order Service]
```

**Responsibilities:**
- Request routing
- Authentication
- Rate limiting
- Response aggregation
- Protocol translation

### 2. Circuit Breaker Pattern

Prevent cascading failures when service is down.

```javascript
class CircuitBreaker {
    constructor(failureThreshold = 5, timeout = 60000) {
        this.failureCount = 0;
        this.failureThreshold = failureThreshold;
        this.timeout = timeout;
        this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
        this.nextAttempt = Date.now();
    }
    
    async execute(fn) {
        if (this.state === 'OPEN') {
            if (Date.now() < this.nextAttempt) {
                throw new Error('Circuit breaker is OPEN');
            }
            this.state = 'HALF_OPEN';
        }
        
        try {
            const result = await fn();
            this.onSuccess();
            return result;
        } catch (error) {
            this.onFailure();
            throw error;
        }
    }
    
    onSuccess() {
        this.failureCount = 0;
        this.state = 'CLOSED';
    }
    
    onFailure() {
        this.failureCount++;
        if (this.failureCount >= this.failureThreshold) {
            this.state = 'OPEN';
            this.nextAttempt = Date.now() + this.timeout;
        }
    }
}

// Usage
const breaker = new CircuitBreaker();

app.get('/api/external-data', async (req, res) => {
    try {
        const data = await breaker.execute(() => 
            externalAPI.getData()
        );
        res.json(data);
    } catch (error) {
        res.status(503).json({ error: 'Service unavailable' });
    }
});
```

### 3. CQRS (Command Query Responsibility Segregation)

Separate read and write operations.

```javascript
// Write Model (Commands)
class CreateUserCommand {
    async execute(userData) {
        const user = await User.create(userData);
        await eventBus.publish('UserCreated', user);
        return user;
    }
}

// Read Model (Queries)
class GetUserQuery {
    async execute(userId) {
        // Can read from optimized read database
        return await UserReadModel.findById(userId);
    }
}

// Usage
const user = await new CreateUserCommand().execute(userData);
const userDetails = await new GetUserQuery().execute(userId);
```

### 4. Event Sourcing

Store state changes as sequence of events.

```javascript
// Event Store
const events = [
    { type: 'AccountCreated', data: { accountId: '123', balance: 0 } },
    { type: 'MoneyDeposited', data: { accountId: '123', amount: 100 } },
    { type: 'MoneyWithdrawn', data: { accountId: '123', amount: 30 } }
];

// Rebuild state from events
function getAccountBalance(accountId, events) {
    return events
        .filter(e => e.data.accountId === accountId)
        .reduce((balance, event) => {
            switch (event.type) {
                case 'AccountCreated':
                    return 0;
                case 'MoneyDeposited':
                    return balance + event.data.amount;
                case 'MoneyWithdrawn':
                    return balance - event.data.amount;
                default:
                    return balance;
            }
        }, 0);
}
```

---

## System Design Process

### Step-by-Step Approach

**1. Requirements Clarification (5 minutes)**
- Functional requirements
- Non-functional requirements
- Scale expectations
- Constraints

**Questions to Ask:**
- Who are the users?
- How many users?
- What are the main features?
- Expected traffic (reads/writes per second)?
- Data size?
- Latency requirements?

**2. Back-of-the-envelope Estimation (5 minutes)**
```
Example: Design Twitter

Users: 500M active users
Daily tweets: 200M
Reads per day: 10B
Tweet size: ~300 bytes
Storage per day: 200M * 300B = 60GB
Storage per year: 60GB * 365 = 22TB
```

**3. System Interface Definition (5 minutes)**
```javascript
// API endpoints
POST /api/tweets
  body: { text: string, mediaUrls: string[] }
  response: { tweetId: string }

GET /api/tweets/:tweetId
  response: { tweet: object }

GET /api/timeline/:userId
  params: { limit: number, offset: number }
  response: { tweets: array }

POST /api/tweets/:tweetId/like
  response: { success: boolean }
```

**4. Database Design (5 minutes)**
```sql
-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP
);

-- Tweets table
CREATE TABLE tweets (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    text TEXT,
    created_at TIMESTAMP,
    likes_count INTEGER DEFAULT 0
);

-- Followers table
CREATE TABLE followers (
    follower_id UUID REFERENCES users(id),
    followee_id UUID REFERENCES users(id),
    created_at TIMESTAMP,
    PRIMARY KEY (follower_id, followee_id)
);
```

**5. High-Level Design (10 minutes)**

Draw architecture diagram:
```
Client Apps
    ↓
Load Balancer
    ↓
API Servers (Stateless)
    ↓
├─→ Cache (Redis)
├─→ Database (Primary + Replicas)
├─→ Object Storage (S3)
└─→ CDN
```

**6. Detailed Design (15 minutes)**

Deep dive into core components:
- Database sharding strategy
- Caching approach
- Feed generation algorithm
- Scaling strategy

**7. Identify Bottlenecks (5 minutes)**
- Single points of failure
- Performance bottlenecks
- Scale limits

---

## Common Interview Questions

### 1. Design URL Shortener (like bit.ly)

**Requirements:**
- Shorten long URLs
- Redirect to original URL
- Analytics (click tracking)
- Custom aliases (optional)

**Solution:**

**API:**
```javascript
POST /api/shorten
  body: { longUrl: string, customAlias?: string }
  response: { shortUrl: string }

GET /:shortCode
  redirect to original URL
```

**Database:**
```sql
CREATE TABLE urls (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    short_code VARCHAR(10) UNIQUE,
    long_url TEXT,
    created_at TIMESTAMP,
    clicks INTEGER DEFAULT 0
);

CREATE INDEX idx_short_code ON urls(short_code);
```

**Short Code Generation:**
```javascript
function generateShortCode(id) {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    let num = id;
    
    while (num > 0) {
        code = chars[num % 62] + code;
        num = Math.floor(num / 62);
    }
    
    return code.padStart(6, '0');
}

// Example: ID 1000 → "G8"
```

**Flow:**
```javascript
// Shorten URL
async function shortenUrl(longUrl) {
    // Check if URL already shortened
    let url = await db.urls.findOne({ long_url: longUrl });
    
    if (url) {
        return `https://short.ly/${url.short_code}`;
    }
    
    // Create new entry
    url = await db.urls.create({ long_url: longUrl });
    url.short_code = generateShortCode(url.id);
    await url.save();
    
    return `https://short.ly/${url.short_code}`;
}

// Redirect
async function redirect(shortCode) {
    const url = await cache.get(shortCode) || 
                 await db.urls.findOne({ short_code: shortCode });
    
    if (!url) {
        throw new Error('URL not found');
    }
    
    // Update click count (async)
    queue.add('incrementClicks', { shortCode });
    
    // Cache for future requests
    await cache.set(shortCode, url.long_url, 3600);
    
    return url.long_url;
}
```

---

### 2. Design Social Media Feed (like Facebook/Instagram)

**Requirements:**
- Show posts from friends/following
- Order by time or relevance
- Pagination
- Real-time updates

**Approaches:**

**1. Pull Model (Fetch on Request)**
```javascript
async function getFeed(userId, page = 1) {
    // Get user's friends
    const friendIds = await getFollowing(userId);
    
    // Get recent posts from friends
    const posts = await db.posts.find({
        author_id: { $in: friendIds },
        created_at: { $gte: Date.now() - 7 * 24 * 60 * 60 * 1000 }
    })
    .sort({ created_at: -1 })
    .skip((page - 1) * 20)
    .limit(20);
    
    return posts;
}
```

**Pros:** Simple, always up-to-date
**Cons:** Slow for users with many friends

**2. Push Model (Pre-compute Feed)**
```javascript
// When user creates post
async function createPost(userId, content) {
    const post = await db.posts.create({
        author_id: userId,
        content
    });
    
    // Get followers
    const followers = await getFollowers(userId);
    
    // Push to each follower's feed
    await Promise.all(
        followers.map(followerId => 
            redis.zadd(`feed:${followerId}`, post.created_at, post.id)
        )
    );
    
    return post;
}

// Get feed
async function getFeed(userId, page = 1) {
    const postIds = await redis.zrevrange(
        `feed:${userId}`,
        (page - 1) * 20,
        page * 20 - 1
    );
    
    const posts = await db.posts.find({ id: { $in: postIds } });
    return posts;
}
```

**Pros:** Fast reads
**Cons:** Slow writes for popular users, storage intensive

**3. Hybrid Approach**
- Push for regular users
- Pull for celebrities/popular accounts
- Use threshold (e.g., 10k followers)

---

### 3. Design Rate Limiter

**Requirements:**
- Limit requests per user/IP
- Different limits for different endpoints
- Graceful handling

**Algorithms:**

**1. Token Bucket**
```javascript
class TokenBucket {
    constructor(capacity, refillRate) {
        this.capacity = capacity;
        this.tokens = capacity;
        this.refillRate = refillRate; // tokens per second
        this.lastRefill = Date.now();
    }
    
    async consume(tokens = 1) {
        this.refill();
        
        if (this.tokens >= tokens) {
            this.tokens -= tokens;
            return true;
        }
        
        return false;
    }
    
    refill() {
        const now = Date.now();
        const timePassed = (now - this.lastRefill) / 1000;
        const tokensToAdd = timePassed * this.refillRate;
        
        this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
        this.lastRefill = now;
    }
}

// Usage
const limiters = new Map();

app.use(async (req, res, next) => {
    const userId = req.user.id;
    
    if (!limiters.has(userId)) {
        limiters.set(userId, new TokenBucket(100, 10)); // 100 capacity, 10/sec
    }
    
    const limiter = limiters.get(userId);
    
    if (await limiter.consume()) {
        next();
    } else {
        res.status(429).json({ error: 'Too many requests' });
    }
});
```

**2. Sliding Window (Redis)**
```javascript
async function rateLimitCheck(userId, limit = 100, window = 60) {
    const key = `ratelimit:${userId}`;
    const now = Date.now();
    const windowStart = now - (window * 1000);
    
    // Remove old entries
    await redis.zremrangebyscore(key, 0, windowStart);
    
    // Count requests in window
    const count = await redis.zcard(key);
    
    if (count < limit) {
        // Add new request
        await redis.zadd(key, now, `${now}-${Math.random()}`);
        await redis.expire(key, window * 2);
        return true;
    }
    
    return false;
}
```

---

## Real-World Examples

### Netflix Architecture (Simplified)

```
Users
  ↓
CloudFront (CDN)
  ↓
API Gateway
  ↓
Microservices
  ├─→ User Service
  ├─→ Recommendation Service
  ├─→ Video Service
  ├─→ Streaming Service
  └─→ Analytics Service
  ↓
Databases
  ├─→ User DB
  ├─→ Content DB
  └─→ Analytics DB
```

**Key Features:**
- Microservices architecture
- Cassandra for data storage
- AWS for infrastructure
- Adaptive streaming
- Content recommendation ML
- Global CDN network

---

## Key Takeaways

1. **No Perfect Solution** - Trade-offs exist
2. **Start Simple** - Scale as needed
3. **Ask Questions** - Clarify requirements
4. **Think Out Loud** - Show your thought process
5. **Consider Trade-offs** - Discuss pros/cons
6. **Be Practical** - Real-world constraints
7. **Stay Current** - Learn from big tech blogs

---

## Resources

- **Books:**
  - Designing Data-Intensive Applications
  - System Design Interview by Alex Xu
  - Building Microservices

- **Websites:**
  - High Scalability Blog
  - AWS Architecture Blog
  - Netflix Tech Blog
  - Uber Engineering Blog

- **Practice:**
  - LeetCode System Design
  - InterviewBit System Design
  - Pramp (mock interviews)

---

**Next Steps:**
- Practice common problems
- Read engineering blogs
- Build scalable projects
- Study real system architectures

