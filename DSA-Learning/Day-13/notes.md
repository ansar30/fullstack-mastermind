# Day 13 - Learning Notes

## Binary Tree Basics

### Tree Node Structure
```javascript
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
```

### Tree Traversal Methods

```
      1
     / \
    2   3
   / \
  4   5
```

#### Inorder (Left → Root → Right)
Output: `[4, 2, 5, 1, 3]`
- Used for BST - gives sorted order
```javascript
function inorder(root) {
    if (!root) return [];
    return [...inorder(root.left), root.val, ...inorder(root.right)];
}
```

#### Preorder (Root → Left → Right)
Output: `[1, 2, 4, 5, 3]`
- Used to create copy of tree
```javascript
function preorder(root) {
    if (!root) return [];
    return [root.val, ...preorder(root.left), ...preorder(root.right)];
}
```

#### Postorder (Left → Right → Root)
Output: `[4, 5, 2, 3, 1]`
- Used to delete tree
```javascript
function postorder(root) {
    if (!root) return [];
    return [...postorder(root.left), ...postorder(root.right), root.val];
}
```

### Iterative Traversal (Using Stack)

```javascript
// Inorder iterative
function inorderIterative(root) {
    const result = [];
    const stack = [];
    let current = root;
    
    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    
    return result;
}
```

## Recursion Fundamentals

### Base Case + Recursive Case
```javascript
function factorial(n) {
    if (n <= 1) return 1;  // Base case
    return n * factorial(n - 1);  // Recursive case
}
```

### Tree Recursion Pattern
1. Handle null/base case
2. Process current node
3. Recurse on left subtree
4. Recurse on right subtree

## Key Takeaways
- 
- 
- 

## Mistakes to Avoid
- 
- 
- 
