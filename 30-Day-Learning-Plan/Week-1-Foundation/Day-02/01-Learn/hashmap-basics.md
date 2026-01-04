# HashMap Basics - DSA

## What is a HashMap?

A HashMap (Hash Table) is a data structure that stores key-value pairs and provides O(1) average time complexity for insertion, deletion, and lookup operations.

### Key Characteristics:
- **Fast Lookup**: O(1) average, O(n) worst case
- **Key-Value Storage**: Each key maps to exactly one value
- **No Duplicate Keys**: Each key is unique
- **Unordered**: Keys are not stored in insertion order (in most implementations)

---

## How HashMaps Work

### 1. Hash Function
Converts a key into an index in the underlying array:
```javascript
// Simple hash function
function hash(key, size) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash + key.charCodeAt(i)) % size;
  }
  return hash;
}
```

### 2. Collision Handling
When two keys hash to the same index:

#### Chaining (Linked List)
```javascript
// Each bucket contains a linked list
[
  [['key1', 'value1'], ['key2', 'value2']], // Collision handled
  [['key3', 'value3']],
  []
]
```

#### Open Addressing (Linear Probing)
```javascript
// Find next available slot
function probe(hash, size, attempt) {
  return (hash + attempt) % size;
}
```

---

## JavaScript Map vs Object

### Map
```javascript
const map = new Map();

// Operations
map.set('key', 'value');     // O(1)
map.get('key');              // O(1)
map.has('key');              // O(1)
map.delete('key');           // O(1)
map.size;                    // O(1)

// Iteration
for (const [key, value] of map) {
  console.log(key, value);
}
```

### Object (as HashMap)
```javascript
const obj = {};

obj['key'] = 'value';        // O(1)
obj['key'];                  // O(1)
'key' in obj;                // O(1)
delete obj['key'];           // O(1)
Object.keys(obj).length;     // O(n)

// Limitations:
// - Keys must be strings/symbols
// - No size property
// - Prototype chain can interfere
```

---

## Common HashMap Patterns

### 1. Frequency Counting
```javascript
function countFrequency(arr) {
  const map = new Map();
  
  for (const item of arr) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  
  return map;
}

countFrequency([1, 2, 2, 3, 3, 3]);
// Map { 1 => 1, 2 => 2, 3 => 3 }
```

### 2. Grouping
```javascript
function groupBy(arr, keyFn) {
  const map = new Map();
  
  for (const item of arr) {
    const key = keyFn(item);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(item);
  }
  
  return map;
}

groupBy(['apple', 'banana', 'apricot'], s => s[0]);
// Map { 'a' => ['apple', 'apricot'], 'b' => ['banana'] }
```

### 3. Two Sum Pattern
```javascript
function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  
  return [];
}
```

---

## Hash Functions

### Properties of Good Hash Function:
1. **Deterministic**: Same input → same output
2. **Uniform Distribution**: Keys spread evenly
3. **Fast Computation**: O(1) or O(k) where k is key length
4. **Minimize Collisions**: Different keys → different hashes

### Common Hash Functions:

#### Simple Hash (for strings)
```javascript
function simpleHash(str, size) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) % size;
  }
  return hash;
}
```

#### DJB2 Hash
```javascript
function djb2Hash(str, size) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
  }
  return hash % size;
}
```

---

## Time Complexities

| Operation | Average | Worst Case |
|-----------|---------|------------|
| Insert    | O(1)    | O(n)       |
| Lookup    | O(1)    | O(n)       |
| Delete    | O(1)    | O(n)       |
| Iterate   | O(n)    | O(n)       |

**Note**: Worst case occurs when all keys hash to same bucket (poor hash function or malicious input).

---

## Common Problems

### 1. Contains Duplicate
```javascript
function hasDuplicate(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}
```

### 2. Group Anagrams
```javascript
function groupAnagrams(strs) {
  const map = new Map();
  
  for (const str of strs) {
    const sorted = str.split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }
  
  return Array.from(map.values());
}
```

---

## Key Takeaways

1. HashMaps provide O(1) average operations
2. Hash functions must be deterministic and uniform
3. Collisions are handled via chaining or open addressing
4. Use `Map` for better performance and features
5. Perfect for frequency counting and grouping problems

