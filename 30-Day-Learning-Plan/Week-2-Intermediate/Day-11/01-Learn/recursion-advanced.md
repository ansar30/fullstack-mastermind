# Recursion Advanced - DSA

## Flatten Nested Array

### Problem
Flatten a nested array of any depth.

### Solution
```javascript
function flattenArray(arr) {
  const result = [];
  
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }
  
  return result;
}
```

### Example
```javascript
flattenArray([1, [2, 3], [4, [5, 6]]]);
// [1, 2, 3, 4, 5, 6]
```

---

## Tree Traversal Basics

### Tree Structure
```javascript
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
```

### Pre-order Traversal
```javascript
function preorder(root) {
  if (!root) return [];
  
  return [
    root.val,
    ...preorder(root.left),
    ...preorder(root.right)
  ];
}
```

### In-order Traversal
```javascript
function inorder(root) {
  if (!root) return [];
  
  return [
    ...inorder(root.left),
    root.val,
    ...inorder(root.right)
  ];
}
```

### Post-order Traversal
```javascript
function postorder(root) {
  if (!root) return [];
  
  return [
    ...postorder(root.left),
    ...postorder(root.right),
    root.val
  ];
}
```

---

## Common Recursive Patterns

### 1. Depth-First Search
```javascript
function dfs(node, target) {
  if (!node) return false;
  if (node.val === target) return true;
  
  return dfs(node.left, target) || dfs(node.right, target);
}
```

### 2. Calculate Tree Height
```javascript
function treeHeight(root) {
  if (!root) return 0;
  
  return 1 + Math.max(
    treeHeight(root.left),
    treeHeight(root.right)
  );
}
```

### 3. Count Nodes
```javascript
function countNodes(root) {
  if (!root) return 0;
  
  return 1 + countNodes(root.left) + countNodes(root.right);
}
```

---

## Key Takeaways

1. Recursion naturally handles nested structures
2. Tree traversal uses recursion extensively
3. Base case is crucial for stopping recursion
4. Each recursive call works on smaller problem
5. Consider stack overflow for deep recursion

