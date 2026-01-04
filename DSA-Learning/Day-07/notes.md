# Day 7 - Learning Notes

## Hash Maps & Sets

### When to Use
- **Set**: Check if element exists, remove duplicates
- **Map**: Store key-value pairs, count frequencies

### JavaScript: Object vs Map

| Feature | Object | Map |
|---------|--------|-----|
| Keys | String/Symbol | Any type |
| Order | Not guaranteed (ES6+: insertion order) | Guaranteed insertion order |
| Size | Manual count | `.size` property |
| Iteration | `for...in`, `Object.keys()` | `.forEach()`, `for...of` |
| Performance | Good | Slightly better for frequent add/remove |

### Common Patterns

```javascript
// Check existence
const set = new Set([1, 2, 3]);
console.log(set.has(2)); // true

// Count frequency
const map = new Map();
for (let item of array) {
    map.set(item, (map.get(item) || 0) + 1);
}

// Bidirectional mapping
const map1 = new Map();
const map2 = new Map();
map1.set(key, value);
map2.set(value, key);
```

## Time Complexity
- Insert: O(1) average
- Lookup: O(1) average
- Delete: O(1) average
- Worst case: O(n) when hash collisions occur

## Key Takeaways
- 
- 
- 

## Mistakes to Avoid
- 
- 
- 
