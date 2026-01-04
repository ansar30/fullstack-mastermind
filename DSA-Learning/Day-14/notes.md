# Day 14 - Learning Notes

## Flattening Nested Structures

### Concept
Converting a nested/hierarchical structure into a linear structure.

### Flatten Nested Array

```javascript
// Simple flatten one level
function flatten(arr) {
    return arr.reduce((acc, val) => acc.concat(val), []);
}

// Deep flatten (all levels)
function flattenDeep(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val)
    , []);
}

// Using built-in (ES2019+)
arr.flat(Infinity); // Flatten all levels
```

### Flatten Binary Tree to Linked List

```javascript
function flatten(root) {
    if (!root) return;
    
    // Flatten left and right subtrees
    flatten(root.left);
    flatten(root.right);
    
    // Save right subtree
    const rightSubtree = root.right;
    
    // Move left to right
    root.right = root.left;
    root.left = null;
    
    // Attach saved right subtree to end
    let current = root;
    while (current.right) {
        current = current.right;
    }
    current.right = rightSubtree;
}
```

### Pattern: DFS for Nested Structures

```javascript
function processNested(item) {
    // Base case: if item is not nested
    if (!isNested(item)) {
        return process(item);
    }
    
    // Recursive case: process children
    const results = [];
    for (let child of item.children) {
        results.push(processNested(child));
    }
    
    return combine(results);
}
```

## Recursion Strategies

### 1. Process Children First (Post-order)
- Flatten children
- Then process current node
- Useful for bottom-up operations

### 2. Process Current First (Pre-order)
- Process current node
- Then recurse on children
- Useful for top-down operations

### 3. Using Stack (Iterative)
```javascript
function flattenIterative(nested) {
    const stack = [nested];
    const result = [];
    
    while (stack.length) {
        const item = stack.pop();
        
        if (Array.isArray(item)) {
            // Push in reverse order for correct final order
            for (let i = item.length - 1; i >= 0; i--) {
                stack.push(item[i]);
            }
        } else {
            result.push(item);
        }
    }
    
    return result;
}
```

## Key Takeaways
- 
- 
- 

## Mistakes to Avoid
- 
- 
- 
