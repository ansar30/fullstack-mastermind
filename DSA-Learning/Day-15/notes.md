# Day 15 - Learning Notes

## Tree Sum Patterns

### Basic Sum of All Nodes

```javascript
function sumTree(root) {
    if (!root) return 0;
    return root.val + sumTree(root.left) + sumTree(root.right);
}
```

### Path Sum (Root to Leaf)

Check if there exists a root-to-leaf path with given sum:

```javascript
function hasPathSum(root, targetSum) {
    if (!root) return false;
    
    // Leaf node
    if (!root.left && !root.right) {
        return root.val === targetSum;
    }
    
    const remainder = targetSum - root.val;
    return hasPathSum(root.left, remainder) || hasPathSum(root.right, remainder);
}
```

### Maximum Path Sum (Binary Tree)

**This is a hard problem!** The path can start and end anywhere.

```javascript
function maxPathSum(root) {
    let maxSum = -Infinity;
    
    function maxGain(node) {
        if (!node) return 0;
        
        // Max sum on left and right (ignore if negative)
        const leftGain = Math.max(maxGain(node.left), 0);
        const rightGain = Math.max(maxGain(node.right), 0);
        
        // Price of current path (could be the max)
        const currentPathSum = node.val + leftGain + rightGain;
        maxSum = Math.max(maxSum, currentPathSum);
        
        // Return max gain if continue from current node
        return node.val + Math.max(leftGain, rightGain);
    }
    
    maxGain(root);
    return maxSum;
}
```

## Key Recursion Patterns

### 1. Accumulator Pattern
Pass accumulated value down the tree:
```javascript
function sumWithDepth(root, depth = 0) {
    if (!root) return 0;
    return root.val * depth + 
           sumWithDepth(root.left, depth + 1) + 
           sumWithDepth(root.right, depth + 1);
}
```

### 2. Return + Process Pattern
Process results from children:
```javascript
function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
```

### 3. Global Variable Pattern
Update global variable during recursion:
```javascript
let result;
function helper(root) {
    if (!root) return;
    result = operation(result, root.val);
    helper(root.left);
    helper(root.right);
}
```

## Congratulations! 🎉

You've completed the 15-day DSA learning journey!

### What You've Learned:
- ✅ Arrays & Two Pointers
- ✅ Strings & Character Manipulation
- ✅ Hash Maps & Sets
- ✅ Sliding Window Technique
- ✅ Trees & Recursion

### Next Steps:
1. Review problems you found challenging
2. Implement solutions without looking at notes
3. Time yourself on LeetCode/HackerRank
4. Move to more advanced topics (Graphs, DP, etc.)

## Key Takeaways
- 
- 
- 

## Mistakes to Avoid
- 
- 
- 
