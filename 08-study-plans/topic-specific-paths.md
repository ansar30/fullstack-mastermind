# Topic-Specific Learning Paths

Focused learning paths for mastering specific technologies and skills.

---

## Table of Contents
1. [React Mastery Path](#react-mastery-path)
2. [Node.js & Backend Path](#nodejs--backend-path)
3. [Database Expert Path](#database-expert-path)
4. [DevOps & Cloud Path](#devops--cloud-path)
5. [JavaScript Deep Dive Path](#javascript-deep-dive-path)
6. [Full-Stack Project Path](#full-stack-project-path)

---

## React Mastery Path

**Duration:** 4-6 weeks  
**Goal:** Master React and build production-ready applications

### Week 1: React Fundamentals
**Day 1-2: Components & JSX**
- [ ] Functional vs class components
- [ ] JSX syntax and rules
- [ ] Props and children
- [ ] Build: Reusable Button, Card, and Input components

**Day 3-4: State & Lifecycle**
- [ ] useState hook deep dive
- [ ] Component lifecycle with useEffect
- [ ] State management patterns
- [ ] Build: Todo list with local state

**Day 5-7: Events & Forms**
- [ ] Event handling
- [ ] Controlled vs uncontrolled components
- [ ] Form validation
- [ ] Build: Multi-step registration form

### Week 2: Advanced Hooks
**Day 8-9: Core Hooks**
- [ ] useEffect cleanup and dependencies
- [ ] useRef for DOM and mutable values
- [ ] useContext for prop drilling
- [ ] Build: Theme switcher with Context

**Day 10-11: Performance Hooks**
- [ ] useMemo for expensive calculations
- [ ] useCallback for function memoization
- [ ] React.memo for component optimization
- [ ] Build: Optimized data table

**Day 12-14: Advanced Hooks**
- [ ] useReducer for complex state
- [ ] useLayoutEffect vs useEffect
- [ ] Custom hooks creation
- [ ] Build: useFetch, useLocalStorage, useDebounce

### Week 3: React Ecosystem
**Day 15-17: Routing**
- [ ] React Router setup
- [ ] Dynamic routing and parameters
- [ ] Protected routes
- [ ] Nested routes
- [ ] Build: Multi-page application with protected routes

**Day 18-21: State Management**
- [ ] When to use global state
- [ ] Redux Toolkit basics
- [ ] Redux async with thunks
- [ ] Alternative: Zustand
- [ ] Build: Shopping cart with Redux

### Week 4: Advanced Patterns & Production
**Day 22-24: Advanced Patterns**
- [ ] HOCs (Higher-Order Components)
- [ ] Render props pattern
- [ ] Compound components
- [ ] Error boundaries
- [ ] Build: Reusable Modal, Tooltip components

**Day 25-27: Performance & Testing**
- [ ] Code splitting and lazy loading
- [ ] React DevTools profiling
- [ ] Jest and React Testing Library
- [ ] E2E testing with Cypress
- [ ] Build: Test suite for existing app

**Day 28: Production Deployment**
- [ ] Environment variables
- [ ] Production build optimization
- [ ] Deploy to Vercel/Netlify
- [ ] SEO optimization

### Projects to Build:
1. **Todo App** (with filters, local storage)
2. **Weather App** (API integration, loading states)
3. **E-commerce Store** (cart, checkout, Redux)
4. **Social Media Dashboard** (multiple APIs, charts)
5. **Real-time Chat** (WebSockets, optimistic updates)

### Resources:
- [React Overview](../01-frontend/react/overview.md)
- [React Interview Questions](../01-frontend/react/interview-questions.md)
- [Code Examples](../01-frontend/react/code-examples/)

---

## Node.js & Backend Path

**Duration:** 4-6 weeks  
**Goal:** Build scalable, production-ready backend services

### Week 1: Node.js Fundamentals
**Day 1-2: Node Basics**
- [ ] Node.js architecture and event loop
- [ ] Modules (CommonJS vs ES6)
- [ ] NPM and package.json
- [ ] Build: CLI tool (file processor)

**Day 3-4: Core Modules**
- [ ] File system (fs) operations
- [ ] Path and OS modules
- [ ] Events and EventEmitter
- [ ] Streams and buffers
- [ ] Build: File upload/download utility

**Day 5-7: Asynchronous Programming**
- [ ] Callbacks and callback hell
- [ ] Promises and Promise.all
- [ ] Async/await mastery
- [ ] Error handling patterns
- [ ] Build: Async data aggregator

### Week 2: Express.js & APIs
**Day 8-10: Express Basics**
- [ ] Express setup and middleware
- [ ] Routing and route parameters
- [ ] Request/response handling
- [ ] Static files serving
- [ ] Build: Basic REST API (CRUD)

**Day 11-13: Advanced Express**
- [ ] Custom middleware creation
- [ ] Error handling middleware
- [ ] Input validation (express-validator)
- [ ] File uploads (multer)
- [ ] Build: Blog API with validation

**Day 14: API Best Practices**
- [ ] RESTful design principles
- [ ] API versioning
- [ ] Rate limiting
- [ ] CORS configuration
- [ ] API documentation (Swagger)

### Week 3: Database Integration
**Day 15-17: MongoDB**
- [ ] MongoDB basics and operations
- [ ] Mongoose ODM
- [ ] Schema design
- [ ] Relationships and population
- [ ] Build: User management system

**Day 18-20: Advanced Database**
- [ ] Aggregation pipelines
- [ ] Indexing and performance
- [ ] Transactions
- [ ] Data validation
- [ ] Build: Analytics API

**Day 21: SQL Basics** (Optional)
- [ ] PostgreSQL basics
- [ ] SQL queries
- [ ] Joins and relationships
- [ ] Sequelize ORM

### Week 4: Authentication & Production
**Day 22-24: Authentication**
- [ ] JWT authentication
- [ ] Password hashing (bcrypt)
- [ ] Refresh tokens
- [ ] Role-based access control
- [ ] Build: Auth system with refresh tokens

**Day 25-26: Security**
- [ ] Security best practices
- [ ] Helmet for headers
- [ ] Input sanitization
- [ ] SQL injection prevention
- [ ] Rate limiting

**Day 27-28: Testing & Deployment**
- [ ] Jest for unit testing
- [ ] Supertest for API testing
- [ ] Environment variables
- [ ] Deploy to Heroku/Railway
- [ ] CI/CD basics

### Projects to Build:
1. **Task Manager API** (CRUD, auth, validation)
2. **Blog Platform API** (posts, comments, likes)
3. **E-commerce Backend** (products, cart, orders)
4. **Real-time Chat API** (WebSockets, rooms)
5. **File Sharing Service** (upload, download, links)

### Resources:
- [Node.js Overview](../02-backend/nodejs/overview.md)
- [Express Overview](../02-backend/expressjs/overview.md)
- [REST APIs Guide](../02-backend/rest-apis/overview.md)

---

## Database Expert Path

**Duration:** 3-4 weeks  
**Goal:** Master database design, queries, and optimization

### Week 1: MongoDB Deep Dive
**Day 1-3: MongoDB Fundamentals**
- [ ] Document model
- [ ] CRUD operations mastery
- [ ] Query operators
- [ ] Update operators
- [ ] Practice: 50+ queries

**Day 4-5: Mongoose**
- [ ] Schemas and models
- [ ] Validation
- [ ] Middleware hooks
- [ ] Virtual properties
- [ ] Build: Complete data models

**Day 6-7: Advanced Queries**
- [ ] Aggregation framework
- [ ] Pipeline stages
- [ ] $lookup for joins
- [ ] Performance optimization
- [ ] Practice: Complex aggregations

### Week 2: Database Design & Optimization
**Day 8-10: Data Modeling**
- [ ] Embedded vs referenced documents
- [ ] One-to-one relationships
- [ ] One-to-many patterns
- [ ] Many-to-many patterns
- [ ] Design: Social media schema

**Day 11-12: Indexing**
- [ ] Index types
- [ ] Compound indexes
- [ ] Index strategies
- [ ] Query performance analysis
- [ ] Practice: Index optimization

**Day 13-14: Transactions & Replication**
- [ ] ACID properties
- [ ] Multi-document transactions
- [ ] Replica sets
- [ ] Sharding basics

### Week 3: SQL & PostgreSQL
**Day 15-17: SQL Fundamentals**
- [ ] SELECT queries
- [ ] WHERE, ORDER BY, GROUP BY
- [ ] Joins (INNER, LEFT, RIGHT, FULL)
- [ ] Subqueries
- [ ] Practice: 50+ SQL queries

**Day 18-19: Advanced SQL**
- [ ] Window functions
- [ ] CTEs (Common Table Expressions)
- [ ] Stored procedures
- [ ] Triggers
- [ ] Practice: Complex queries

**Day 20-21: Database Administration**
- [ ] Backups and recovery
- [ ] User management
- [ ] Performance tuning
- [ ] Connection pooling

### Projects to Build:
1. **Library Management System**
2. **Social Network Schema**
3. **E-commerce Database**
4. **Analytics Platform**
5. **Multi-tenant SaaS Schema**

---

## DevOps & Cloud Path

**Duration:** 4-5 weeks  
**Goal:** Deploy and manage applications in the cloud

### Week 1: Git & Version Control
**Day 1-3: Git Essentials**
- [ ] Git basics (init, add, commit, push)
- [ ] Branching and merging
- [ ] Resolving conflicts
- [ ] Git workflows (Gitflow)
- [ ] Practice: Complex scenarios

**Day 4-5: GitHub**
- [ ] Pull requests
- [ ] Code review
- [ ] GitHub Actions basics
- [ ] Issues and project management

**Day 6-7: Advanced Git**
- [ ] Rebase vs merge
- [ ] Cherry-pick
- [ ] Git hooks
- [ ] Stash and reflog

### Week 2: Docker
**Day 8-10: Docker Basics**
- [ ] Containers vs VMs
- [ ] Docker images
- [ ] Dockerfile creation
- [ ] Docker commands
- [ ] Build: Containerize Node.js app

**Day 11-12: Docker Compose**
- [ ] Multi-container applications
- [ ] Docker Compose syntax
- [ ] Networking
- [ ] Volumes
- [ ] Build: Full-stack app with Docker Compose

**Day 13-14: Docker Advanced**
- [ ] Image optimization
- [ ] Multi-stage builds
- [ ] Docker Hub
- [ ] Best practices

### Week 3: AWS Fundamentals
**Day 15-17: Core Services**
- [ ] IAM (users, roles, policies)
- [ ] EC2 instances
- [ ] Security groups
- [ ] Deploy Node.js app to EC2

**Day 18-19: Storage & Databases**
- [ ] S3 bucket creation and usage
- [ ] RDS (managed databases)
- [ ] CloudFront (CDN)
- [ ] Build: Static site with S3 + CloudFront

**Day 20-21: Serverless**
- [ ] Lambda functions
- [ ] API Gateway
- [ ] DynamoDB basics
- [ ] Build: Serverless API

### Week 4: CI/CD & Monitoring
**Day 22-24: CI/CD**
- [ ] GitHub Actions workflows
- [ ] Automated testing
- [ ] Automated deployment
- [ ] Environment management
- [ ] Build: Complete CI/CD pipeline

**Day 25-27: Jenkins** (Optional)
- [ ] Jenkins setup
- [ ] Pipeline creation
- [ ] Integrations
- [ ] Build deployment pipeline

**Day 28: Monitoring**
- [ ] Application logging
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring
- [ ] CloudWatch basics

### Projects to Build:
1. **Dockerized MERN App**
2. **Serverless REST API**
3. **Static Site with CI/CD**
4. **Multi-service Application**
5. **Production-ready Deployment**

### Resources:
- [AWS Overview](../05-devops/aws/overview.md)
- [Jenkins Guide](../05-devops/jenkins/overview.md)
- [Git Guide](../04-version-control/git/overview.md)

---

## JavaScript Deep Dive Path

**Duration:** 3-4 weeks  
**Goal:** Master JavaScript from fundamentals to advanced concepts

### Week 1: Core JavaScript
**Day 1-2: Basics**
- [ ] Variables (var, let, const)
- [ ] Data types
- [ ] Operators
- [ ] Control flow
- [ ] Functions

**Day 3-4: Advanced Functions**
- [ ] Arrow functions
- [ ] Closures
- [ ] IIFE
- [ ] Higher-order functions
- [ ] Practice: Functional programming

**Day 5-7: Objects & Arrays**
- [ ] Object creation and manipulation
- [ ] Array methods (map, filter, reduce)
- [ ] Destructuring
- [ ] Spread and rest operators
- [ ] Practice: 30+ exercises

### Week 2: Asynchronous JavaScript
**Day 8-10: Async Programming**
- [ ] Event loop
- [ ] Call stack
- [ ] Callbacks
- [ ] Promises
- [ ] Async/await
- [ ] Practice: Async patterns

**Day 11-13: Advanced Async**
- [ ] Promise.all, Promise.race
- [ ] Error handling
- [ ] Async iterators
- [ ] Web Workers
- [ ] Build: Data fetching library

**Day 14: Performance**
- [ ] Debouncing and throttling
- [ ] Memoization
- [ ] Lazy loading
- [ ] Code splitting

### Week 3: OOP & Design Patterns
**Day 15-17: Object-Oriented**
- [ ] Prototypes
- [ ] Classes
- [ ] Inheritance
- [ ] Encapsulation
- [ ] Build: Class-based system

**Day 18-20: Design Patterns**
- [ ] Module pattern
- [ ] Singleton
- [ ] Factory
- [ ] Observer
- [ ] Practice: Implement patterns

**Day 21: Functional Programming**
- [ ] Pure functions
- [ ] Immutability
- [ ] Composition
- [ ] Currying

### Week 4: Modern JavaScript
**Day 22-24: ES6+ Features**
- [ ] Template literals
- [ ] Symbols
- [ ] Iterators and generators
- [ ] Proxy and Reflect
- [ ] WeakMap and WeakSet

**Day 25-27: Advanced Topics**
- [ ] Event delegation
- [ ] Memory management
- [ ] Security (XSS, CSRF)
- [ ] Web APIs

**Day 28: TypeScript Intro**
- [ ] TypeScript basics
- [ ] Types and interfaces
- [ ] Generics

### Projects:
1. **Custom Array Methods**
2. **Promise Implementation**
3. **Event Emitter**
4. **Observable Pattern**
5. **Mini Framework**

---

## Full-Stack Project Path

**Duration:** 8-10 weeks  
**Goal:** Build 3-4 production-ready full-stack applications

### Project 1: Task Management App (2 weeks)
**Features:**
- User authentication
- Create/edit/delete tasks
- Categories and tags
- Due dates and reminders
- Search and filters
- Responsive design

**Tech Stack:**
- React + Redux
- Node.js + Express
- MongoDB
- JWT auth
- Deployment: Vercel + Heroku

### Project 2: E-commerce Platform (3 weeks)
**Features:**
- Product catalog with categories
- Shopping cart
- User accounts
- Order management
- Payment integration (Stripe)
- Admin panel
- Email notifications
- Reviews and ratings

**Tech Stack:**
- Next.js (SSR)
- Node.js microservices
- MongoDB + Redis
- S3 for images
- Stripe API
- Deployment: AWS

### Project 3: Social Media Dashboard (2 weeks)
**Features:**
- User profiles
- Post creation (text, images)
- Like and comment system
- Follow users
- Feed algorithm
- Real-time notifications
- Search functionality

**Tech Stack:**
- React
- Node.js + Socket.io
- MongoDB
- Cloudinary for media
- Deployment: Railway

### Project 4: Real-time Chat Application (1 week)
**Features:**
- One-on-one chat
- Group chat rooms
- File sharing
- Online status
- Message read receipts
- Typing indicators

**Tech Stack:**
- React
- Node.js + Socket.io
- MongoDB
- S3 for files

### Portfolio Website (1 week)
- Showcase all projects
- About section
- Blog (optional)
- Contact form
- Responsive design
- SEO optimized

---

## Quick Start Checklists

### First Week Checklist (Any Path)
- [ ] Set up development environment
- [ ] Install necessary tools
- [ ] Clone repository
- [ ] Complete first tutorial
- [ ] Build first small project
- [ ] Join community (Discord/Reddit)
- [ ] Follow learning schedule

### Daily Routine
- [ ] Morning: Theory (1 hour)
- [ ] Afternoon: Practice (1-2 hours)
- [ ] Evening: Build/Review (1 hour)
- [ ] Review flashcards
- [ ] Track progress

### Weekly Review
- [ ] What did I learn?
- [ ] What challenges did I face?
- [ ] What project did I complete?
- [ ] What's next week's focus?
- [ ] Update portfolio

---

## Resources for All Paths

### Practice Platforms
- **LeetCode** - Algorithms
- **Frontend Mentor** - UI challenges
- **DevChallenges** - Full-stack projects
- **CodeWars** - Daily practice

### Learning
- **MDN** - Web documentation
- **freeCodeCamp** - Tutorials
- **YouTube** - Video tutorials
- **This Repository** - Comprehensive guides

### Community
- **Reddit** - r/webdev, r/reactjs, r/node
- **Discord** - Various dev servers
- **Twitter** - Follow developers
- **Dev.to** - Articles and discussions

---

## Tips for Success

1. **Focus on one path at a time**
2. **Build projects, don't just follow tutorials**
3. **Practice daily, even if it's 30 minutes**
4. **Join communities for help and motivation**
5. **Review and refactor old code**
6. **Document your learning**
7. **Share your progress**
8. **Don't compare your progress with others**
9. **Take breaks to avoid burnout**
10. **Enjoy the journey!**

---

**Remember:** Everyone learns at their own pace. Adjust these paths based on your schedule, prior knowledge, and goals. The key is consistency and practice.

**Good luck on your learning journey! 🚀**

