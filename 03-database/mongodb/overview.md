# MongoDB - Complete Guide

## Table of Contents
1. [Introduction to MongoDB](#introduction-to-mongodb)
2. [CRUD Operations](#crud-operations)
3. [Query Operators](#query-operators)
4. [Aggregation](#aggregation)
5. [Indexing](#indexing)
6. [Mongoose ODM](#mongoose-odm)
7. [Data Modeling](#data-modeling)
8. [Transactions](#transactions)
9. [Performance Optimization](#performance-optimization)
10. [Best Practices](#best-practices)

---

## Introduction to MongoDB

MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents.

### Key Features
- **Document-Oriented** - Data stored in BSON (Binary JSON) format
- **Schema-less** - Flexible data structure
- **Scalable** - Horizontal scaling with sharding
- **High Performance** - Fast read/write operations
- **Rich Query Language** - Powerful querying capabilities
- **Aggregation Framework** - Complex data processing

### When to Use MongoDB
✅ **Good for:**
- Rapidly changing schemas
- Unstructured or semi-structured data
- High scalability requirements
- Real-time analytics
- Content management systems
- IoT applications

❌ **Not ideal for:**
- Complex transactions across multiple documents (though supported now)
- Applications requiring strict ACID compliance
- Heavy joins between data

### MongoDB vs SQL

| Feature | MongoDB | SQL |
|---------|---------|-----|
| Data Model | Document (JSON) | Tables (Rows) |
| Schema | Flexible | Fixed |
| Relationships | Embedded or Referenced | Foreign Keys |
| Scaling | Horizontal (Sharding) | Vertical |
| Query Language | MongoDB Query Language | SQL |
| Transactions | Supported (v4.0+) | Native |

---

## CRUD Operations

### Create (Insert)

```javascript
// Insert one document
db.users.insertOne({
    name: "John Doe",
    email: "john@example.com",
    age: 30,
    isActive: true,
    tags: ["developer", "nodejs"],
    address: {
        city: "New York",
        country: "USA"
    },
    createdAt: new Date()
});

// Insert multiple documents
db.users.insertMany([
    { name: "Jane", email: "jane@example.com", age: 25 },
    { name: "Bob", email: "bob@example.com", age: 35 }
]);
```

### Read (Find)

```javascript
// Find all documents
db.users.find();

// Find with filter
db.users.find({ age: 30 });

// Find one document
db.users.findOne({ email: "john@example.com" });

// Projection (select specific fields)
db.users.find({}, { name: 1, email: 1, _id: 0 });
// 1 = include, 0 = exclude

// Find with multiple conditions
db.users.find({
    age: { $gte: 25 },
    isActive: true
});

// Sort
db.users.find().sort({ age: 1 }); // 1 = ascending, -1 = descending

// Limit and Skip
db.users.find().limit(10).skip(20); // Pagination

// Count
db.users.countDocuments({ age: { $gte: 25 } });
```

### Update

```javascript
// Update one document
db.users.updateOne(
    { email: "john@example.com" }, // Filter
    { $set: { age: 31 } } // Update
);

// Update multiple documents
db.users.updateMany(
    { isActive: false },
    { $set: { status: "inactive" } }
);

// Replace document
db.users.replaceOne(
    { _id: ObjectId("...") },
    { name: "New Name", email: "new@example.com" }
);

// Upsert (update or insert)
db.users.updateOne(
    { email: "new@example.com" },
    { $set: { name: "New User", age: 25 } },
    { upsert: true }
);

// Update operators
db.users.updateOne(
    { email: "john@example.com" },
    {
        $set: { name: "John Updated" }, // Set field
        $inc: { age: 1 }, // Increment
        $push: { tags: "mongodb" }, // Add to array
        $pull: { tags: "old-tag" }, // Remove from array
        $unset: { tempField: "" }, // Remove field
        $rename: { oldName: "newName" } // Rename field
    }
);
```

### Delete

```javascript
// Delete one document
db.users.deleteOne({ email: "john@example.com" });

// Delete multiple documents
db.users.deleteMany({ isActive: false });

// Delete all documents in collection
db.users.deleteMany({});
```

---

## Query Operators

### Comparison Operators

```javascript
// $eq - Equal to
db.users.find({ age: { $eq: 30 } });

// $ne - Not equal to
db.users.find({ age: { $ne: 30 } });

// $gt, $gte - Greater than, Greater than or equal
db.users.find({ age: { $gt: 25 } });
db.users.find({ age: { $gte: 25 } });

// $lt, $lte - Less than, Less than or equal
db.users.find({ age: { $lt: 40 } });
db.users.find({ age: { $lte: 40 } });

// $in - Match any value in array
db.users.find({ age: { $in: [25, 30, 35] } });

// $nin - Not in array
db.users.find({ age: { $nin: [25, 30] } });
```

### Logical Operators

```javascript
// $and - All conditions must be true
db.users.find({
    $and: [
        { age: { $gte: 25 } },
        { isActive: true }
    ]
});

// Implicit $and
db.users.find({ age: { $gte: 25 }, isActive: true });

// $or - At least one condition must be true
db.users.find({
    $or: [
        { age: { $lt: 20 } },
        { age: { $gt: 60 } }
    ]
});

// $not - Negates condition
db.users.find({ age: { $not: { $gte: 30 } } });

// $nor - None of the conditions are true
db.users.find({
    $nor: [
        { isActive: true },
        { age: { $lt: 18 } }
    ]
});
```

### Element Operators

```javascript
// $exists - Field exists
db.users.find({ phone: { $exists: true } });

// $type - Field type
db.users.find({ age: { $type: "number" } });
```

### Array Operators

```javascript
// $all - Array contains all elements
db.users.find({ tags: { $all: ["developer", "nodejs"] } });

// $elemMatch - Array element matches condition
db.users.find({
    scores: { $elemMatch: { $gte: 80, $lte: 90 } }
});

// $size - Array has specific length
db.users.find({ tags: { $size: 3 } });
```

### String Operators

```javascript
// $regex - Pattern matching
db.users.find({ name: { $regex: /john/i } }); // Case insensitive

// Text search (requires text index)
db.users.find({ $text: { $search: "developer nodejs" } });
```

---

## Aggregation

Aggregation pipeline processes documents through stages.

### Common Aggregation Stages

```javascript
// $match - Filter documents
db.orders.aggregate([
    { $match: { status: "completed" } }
]);

// $group - Group documents
db.orders.aggregate([
    {
        $group: {
            _id: "$customerId",
            totalAmount: { $sum: "$amount" },
            orderCount: { $sum: 1 },
            avgAmount: { $avg: "$amount" },
            maxAmount: { $max: "$amount" },
            minAmount: { $min: "$amount" }
        }
    }
]);

// $project - Select/reshape fields
db.users.aggregate([
    {
        $project: {
            name: 1,
            email: 1,
            ageGroup: {
                $cond: {
                    if: { $gte: ["$age", 30] },
                    then: "senior",
                    else: "junior"
                }
            }
        }
    }
]);

// $sort - Sort documents
db.users.aggregate([
    { $sort: { age: -1 } }
]);

// $limit and $skip
db.users.aggregate([
    { $skip: 10 },
    { $limit: 5 }
]);

// $lookup - Join collections
db.orders.aggregate([
    {
        $lookup: {
            from: "customers",
            localField: "customerId",
            foreignField: "_id",
            as: "customerInfo"
        }
    }
]);

// $unwind - Deconstruct array
db.users.aggregate([
    { $unwind: "$tags" }
]);

// $addFields - Add new fields
db.users.aggregate([
    {
        $addFields: {
            fullName: { $concat: ["$firstName", " ", "$lastName"] }
        }
    }
]);
```

### Complex Aggregation Example

```javascript
// Sales report by month
db.orders.aggregate([
    // Stage 1: Filter completed orders
    {
        $match: {
            status: "completed",
            orderDate: { $gte: new Date("2024-01-01") }
        }
    },
    // Stage 2: Group by month
    {
        $group: {
            _id: {
                year: { $year: "$orderDate" },
                month: { $month: "$orderDate" }
            },
            totalSales: { $sum: "$amount" },
            orderCount: { $sum: 1 },
            avgOrderValue: { $avg: "$amount" }
        }
    },
    // Stage 3: Sort by date
    {
        $sort: { "_id.year": 1, "_id.month": 1 }
    },
    // Stage 4: Format output
    {
        $project: {
            _id: 0,
            month: {
                $concat: [
                    { $toString: "$_id.year" },
                    "-",
                    { $toString: "$_id.month" }
                ]
            },
            totalSales: { $round: ["$totalSales", 2] },
            orderCount: 1,
            avgOrderValue: { $round: ["$avgOrderValue", 2] }
        }
    }
]);
```

---

## Indexing

Indexes improve query performance by reducing the number of documents scanned.

### Creating Indexes

```javascript
// Single field index
db.users.createIndex({ email: 1 }); // 1 = ascending, -1 = descending

// Compound index (multiple fields)
db.users.createIndex({ age: 1, city: 1 });

// Unique index
db.users.createIndex({ email: 1 }, { unique: true });

// Text index for full-text search
db.articles.createIndex({ title: "text", content: "text" });

// TTL index (expires documents)
db.sessions.createIndex(
    { createdAt: 1 },
    { expireAfterSeconds: 3600 } // 1 hour
);

// Partial index (index subset of documents)
db.users.createIndex(
    { email: 1 },
    { partialFilterExpression: { isActive: true } }
);

// Sparse index (only index documents with field)
db.users.createIndex({ phone: 1 }, { sparse: true });
```

### Managing Indexes

```javascript
// List all indexes
db.users.getIndexes();

// Drop index
db.users.dropIndex("email_1");

// Drop all indexes
db.users.dropIndexes();

// Explain query execution
db.users.find({ email: "john@example.com" }).explain("executionStats");
```

### Index Best Practices
1. Index fields used in queries frequently
2. Create compound indexes for multiple field queries
3. Put most selective fields first in compound indexes
4. Don't over-index (impacts write performance)
5. Monitor index usage with explain()
6. Remove unused indexes

---

## Mongoose ODM

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.

### Setup

```javascript
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Connection events
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
```

### Schema Definition

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
    },
    age: {
        type: Number,
        min: 0,
        max: 120,
        default: 0
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'moderator'],
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    tags: [String],
    address: {
        street: String,
        city: String,
        country: String,
        zipCode: String
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile'
    }
}, {
    timestamps: true // Adds createdAt and updatedAt
});

// Create model
const User = mongoose.model('User', userSchema);

module.exports = User;
```

### Middleware (Hooks)

```javascript
// Pre-save middleware
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Post-save middleware
userSchema.post('save', function(doc, next) {
    console.log('User saved:', doc._id);
    next();
});

// Pre-remove middleware
userSchema.pre('remove', async function(next) {
    await Post.deleteMany({ author: this._id });
    next();
});
```

### Instance Methods

```javascript
// Add custom method to schema
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAuthToken = function() {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
};

// Usage
const user = await User.findOne({ email });
const isMatch = await user.comparePassword(password);
const token = user.generateAuthToken();
```

### Static Methods

```javascript
// Add static method to schema
userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email });
};

userSchema.statics.findActive = function() {
    return this.find({ isActive: true });
};

// Usage
const user = await User.findByEmail('john@example.com');
const activeUsers = await User.findActive();
```

### Virtual Properties

```javascript
// Virtual property (not stored in DB)
userSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`;
});

userSchema.virtual('fullName').set(function(name) {
    const parts = name.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
});

// Include virtuals in JSON
userSchema.set('toJSON', { virtuals: true });
```

### CRUD with Mongoose

```javascript
// Create
const user = new User({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
});
await user.save();

// Or
const user = await User.create({
    name: 'John Doe',
    email: 'john@example.com'
});

// Read
const users = await User.find();
const user = await User.findById(id);
const user = await User.findOne({ email: 'john@example.com' });

// With population
const user = await User.findById(id).populate('profile');

// Update
await User.updateOne({ _id: id }, { age: 31 });
await User.findByIdAndUpdate(id, { age: 31 }, { new: true });

// Delete
await User.deleteOne({ _id: id });
await User.findByIdAndDelete(id);
```

### Query Building

```javascript
// Chaining query methods
const users = await User
    .find({ age: { $gte: 25 } })
    .select('name email')
    .sort({ age: -1 })
    .limit(10)
    .skip(20);

// Query with lean() for plain JavaScript objects
const users = await User.find().lean();
```

### Population (Joins)

```javascript
// Define reference in schema
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

// Populate
const post = await Post.findById(id).populate('author');

// Populate multiple fields
const post = await Post.findById(id)
    .populate('author')
    .populate('comments');

// Populate with select
const post = await Post.findById(id)
    .populate('author', 'name email');

// Nested populate
const post = await Post.findById(id)
    .populate({
        path: 'comments',
        populate: { path: 'author' }
    });
```

---

## Data Modeling

### Embedded vs Referenced

**Embedded Documents** (One-to-Few)
```javascript
// Good for data accessed together
const userSchema = new mongoose.Schema({
    name: String,
    address: {
        street: String,
        city: String,
        country: String
    },
    phones: [{ type: String, number: String }]
});
```

**Referenced Documents** (One-to-Many, Many-to-Many)
```javascript
// Good for data that grows unbounded
const postSchema = new mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const userSchema = new mongoose.Schema({
    name: String
    // Posts are in separate collection
});
```

### Design Patterns

**1. One-to-Many: Embedded**
```javascript
// Use when "many" side is small and doesn't grow
{
    _id: 1,
    name: "John",
    addresses: [
        { street: "123 Main St", city: "NYC" },
        { street: "456 Park Ave", city: "LA" }
    ]
}
```

**2. One-to-Many: Referenced**
```javascript
// Use when "many" side is large or grows unbounded
// User
{ _id: 1, name: "John" }

// Posts
{ _id: 101, title: "Post 1", authorId: 1 }
{ _id: 102, title: "Post 2", authorId: 1 }
```

**3. Many-to-Many**
```javascript
// Student-Course relationship
// Option 1: Array of references
const studentSchema = new mongoose.Schema({
    name: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

// Option 2: Junction collection
const enrollmentSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    grade: String,
    enrolledAt: Date
});
```

---

## Transactions

MongoDB supports multi-document ACID transactions (v4.0+).

```javascript
const session = await mongoose.startSession();
session.startTransaction();

try {
    // Operations within transaction
    const user = await User.create([{
        name: 'John',
        email: 'john@example.com'
    }], { session });
    
    await Account.updateOne(
        { userId: user[0]._id },
        { $inc: { balance: 100 } },
        { session }
    );
    
    // Commit transaction
    await session.commitTransaction();
    console.log('Transaction successful');
} catch (error) {
    // Rollback on error
    await session.abortTransaction();
    console.error('Transaction aborted:', error);
} finally {
    session.endSession();
}
```

---

## Performance Optimization

### 1. Use Indexes
```javascript
// Index frequently queried fields
db.users.createIndex({ email: 1 });
db.posts.createIndex({ authorId: 1, createdAt: -1 });
```

### 2. Use Projection
```javascript
// Select only needed fields
const users = await User.find({}, 'name email');
```

### 3. Use Lean Queries
```javascript
// Return plain JavaScript objects (faster)
const users = await User.find().lean();
```

### 4. Pagination
```javascript
// Limit results
const page = 1;
const limit = 20;
const users = await User
    .find()
    .limit(limit)
    .skip((page - 1) * limit);
```

### 5. Aggregation Instead of Multiple Queries
```javascript
// Better than multiple find() calls
const results = await User.aggregate([
    { $match: { isActive: true } },
    { $group: { _id: "$city", count: { $sum: 1 } } }
]);
```

### 6. Connection Pooling
```javascript
mongoose.connect('mongodb://localhost/myapp', {
    poolSize: 10 // Maintain up to 10 connections
});
```

---

## Best Practices

1. **Always use indexes** for queried fields
2. **Validate data** with Mongoose schemas
3. **Use transactions** for related updates
4. **Avoid deep nesting** (max 2-3 levels)
5. **Use projections** to fetch only needed data
6. **Monitor performance** with explain()
7. **Use connection pooling** for scalability
8. **Handle errors** properly
9. **Use environment variables** for sensitive data
10. **Regular backups** and replica sets

---

**Next Steps:**
- Review [Interview Questions](./interview-questions.md)
- Practice with [Code Examples](./code-examples/)
- Check the [Cheatsheet](./cheatsheet.md)

