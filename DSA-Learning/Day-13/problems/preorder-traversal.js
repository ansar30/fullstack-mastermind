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
 * Problem: Binary Tree Preorder Traversal
 * 
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 * Preorder: Root → Left → Right
 * 
 * Example:
 * Input: root = [1,null,2,3]
 *     1
 *      \
 *       2
 *      /
 *     3
 * Output: [1,2,3]
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity: O(h) where h is tree height
 */

function preorderTraversal(root) {
    // Your solution here (try both recursive and iterative)

}

// Test cases
const tree1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(preorderTraversal(tree1)); // Expected: [1, 2, 3]

const tree2 = null;
console.log(preorderTraversal(tree2)); // Expected: []

const tree3 = new TreeNode(1);
console.log(preorderTraversal(tree3)); // Expected: [1]

module.exports = { TreeNode, preorderTraversal };
