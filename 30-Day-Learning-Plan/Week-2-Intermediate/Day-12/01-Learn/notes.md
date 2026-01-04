# MongoDB Advanced - Day 12

## Indexing

### What are Indexes?
Data structures that improve query performance by allowing faster data retrieval.

### Single Field Index
```javascript
// Create index
db.users.createIndex({ email: 1 });

// Query uses index
db.users.find({ email: 'user@example.com' });
```

### Compound Index
```javascript
// Create compound index
db.users.createIndex({ email: 1, age: -1 });

// Order matters - left to right
// Efficient for: { email }, { email, age }
// Not efficient for: { age } alone
```

### Index Types
- **1**: Ascending
- **-1**: Descending
- **text**: Text search
- **2dsphere**: Geospatial

---

## Aggregation Pipeline

### Pipeline Stages
```javascript
db.orders.aggregate([
  { $match: { status: 'completed' } },
  { $group: { _id: '$userId', total: { $sum: '$amount' } } },
  { $sort: { total: -1 } },
  { $limit: 5 }
]);
```

### Common Stages

#### $match
Filters documents:
```javascript
{ $match: { age: { $gte: 18 } } }
```

#### $group
Groups documents:
```javascript
{ 
  $group: { 
    _id: '$category', 
    count: { $sum: 1 },
    avgPrice: { $avg: '$price' }
  } 
}
```

#### $sort
Sorts documents:
```javascript
{ $sort: { createdAt: -1 } }
```

#### $project
Reshapes documents:
```javascript
{ $project: { name: 1, email: 1, _id: 0 } }
```

---

## Lookup (Joins)

### $lookup Stage
Performs left outer join:
```javascript
db.orders.aggregate([
  {
    $lookup: {
      from: 'users',
      localField: 'userId',
      foreignField: '_id',
      as: 'user'
    }
  }
]);
```

### Unwind
Flattens array from lookup:
```javascript
{ $unwind: '$user' }
```

---

## Performance Optimization

### Query Optimization
1. Use indexes
2. Limit results
3. Project only needed fields
4. Use explain() to analyze

### Index Best Practices
- Index frequently queried fields
- Compound indexes for multiple fields
- Monitor index usage
- Remove unused indexes

---

## Key Takeaways

1. Indexes dramatically improve query speed
2. Aggregation pipeline is powerful for data processing
3. $lookup performs joins between collections
4. Always analyze query performance
5. Use explain() to understand query execution

