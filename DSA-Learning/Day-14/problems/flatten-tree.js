/**
 * Binary Tree Node Definition
 */
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Problem: Flatten Binary Tree to Linked List
 * 
 * Given the root of a binary tree, flatten the tree into a "linked list":
 * - The "linked list" should use TreeNode where right child is next node, left is null
 * - The order should be the same as pre-order traversal
 * - Do it in-place
 * 
 * Example:
 * Input:    1
 *          / \
 *         2   5
 *        / \   \
 *       3   4   6
 * 
 * Output:  1 → 2 → 3 → 4 → 5 → 6
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity: O(1) extra space (not counting recursion stack)
 */

function flatten(root) {
    // Your solution here
    // Modify the tree in-place

}

// Helper to print flattened tree
function printFlattened(root) {
    const result = [];
    let current = root;
    while (current) {
        result.push(current.val);
        current = current.right;
    }
    return result;
}

// Test cases
const tree1 = new TreeNode(1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(5, null, new TreeNode(6))
);
flatten(tree1);
console.log(printFlattened(tree1)); // Expected: [1, 2, 3, 4, 5, 6]

module.exports = { TreeNode, flatten };
