/**
 * Recursion Advanced - Complete Solutions
 */

/**
 * Problem 1: Flatten Nested Array
 * Time: O(n), Space: O(n) where n is total elements
 */
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

// Alternative using reduce
function flattenArrayReduce(arr) {
    return arr.reduce((acc, item) => {
        return acc.concat(
            Array.isArray(item) ? flattenArrayReduce(item) : item
        );
    }, []);
}

/**
 * Problem 2: Tree Pre-order Traversal
 * Time: O(n), Space: O(h) where h is height
 */
function preorderTraversal(root) {
    if (!root) return [];
    
    return [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right)
    ];
}

/**
 * Problem 3: Calculate Tree Height
 * Time: O(n), Space: O(h)
 */
function treeHeight(root) {
    if (!root) return 0;
    
    return 1 + Math.max(
        treeHeight(root.left),
        treeHeight(root.right)
    );
}

/**
 * Additional: In-order Traversal
 */
function inorderTraversal(root) {
    if (!root) return [];
    
    return [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right)
    ];
}

/**
 * Additional: Post-order Traversal
 */
function postorderTraversal(root) {
    if (!root) return [];
    
    return [
        ...postorderTraversal(root.left),
        ...postorderTraversal(root.right),
        root.val
    ];
}

/**
 * Additional: Count Nodes
 */
function countNodes(root) {
    if (!root) return 0;
    
    return 1 + countNodes(root.left) + countNodes(root.right);
}

// Test cases
console.log('Flatten:', flattenArray([1, [2, 3], [4, [5, 6]]])); 
// [1, 2, 3, 4, 5, 6]

// Tree structure for testing
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log('Pre-order:', preorderTraversal(root)); // [1, 2, 4, 5, 3]
console.log('In-order:', inorderTraversal(root)); // [4, 2, 5, 1, 3]
console.log('Post-order:', postorderTraversal(root)); // [4, 5, 2, 3, 1]
console.log('Height:', treeHeight(root)); // 3
console.log('Count Nodes:', countNodes(root)); // 5

