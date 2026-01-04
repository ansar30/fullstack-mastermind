# MongoDB Basics - Day 06

## Documents and Collections

### What is MongoDB?
A NoSQL document database that stores data in flexible, JSON-like documents.

### Document Structure
```javascript
{
  _id: ObjectId("..."),
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York"
  }
}
```

### Collections
- Group of documents
- Similar to tables in SQL
- No schema enforcement

---

## Embedding vs Referencing

### Embedding (Denormalization)
Store related data in the same document:
```javascript
{
  _id: 1,
  name: "User",
  posts: [
    { title: "Post 1", content: "..." },
    { title: "Post 2", content: "..." }
  ]
}
```

**Use when**: One-to-few relationships, data accessed together

### Referencing (Normalization)
Store references to other documents:
```javascript
// User collection
{ _id: 1, name: "User" }

// Posts collection
{ _id: 1, userId: 1, title: "Post 1" }
{ _id: 2, userId: 1, title: "Post 2" }
```

**Use when**: One-to-many, many-to-many, large documents

---

## CRUD Operations

### Create
```javascript
// Insert one
db.users.insertOne({
  name: "John",
  email: "john@example.com"
});

// Insert many
db.users.insertMany([
  { name: "John", email: "john@example.com" },
  { name: "Jane", email: "jane@example.com" }
]);
```

### Read
```javascript
// Find one
db.users.findOne({ name: "John" });

// Find many
db.users.find({ age: { $gt: 18 } });

// Projection
db.users.find({}, { name: 1, email: 1 });
```

### Update
```javascript
// Update one
db.users.updateOne(
  { name: "John" },
  { $set: { age: 31 } }
);

// Update many
db.users.updateMany(
  { age: { $lt: 18 } },
  { $set: { status: "minor" } }
);
```

### Delete
```javascript
// Delete one
db.users.deleteOne({ name: "John" });

// Delete many
db.users.deleteMany({ status: "inactive" });
```

---

## Key Takeaways

1. MongoDB stores documents (JSON-like)
2. Collections group related documents
3. Embed for one-to-few, reference for one-to-many
4. CRUD operations are straightforward
5. Use $set for updates to avoid overwriting

