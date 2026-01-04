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
 * Problem: Sum of All Tree Nodes
 * 
 * Given the root of a binary tree, return the sum of all node values.
 * 
 * Example:
 * Input:    5
 *          / \
 *         3   8
 *        / \
 *       2   4
 * Output: 22 (5 + 3 + 8 + 2 + 4)
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity: O(h) where h is tree height
 */

function sumOfNodes(root) {
    // Your solution here

}

// Test cases
const tree1 = new TreeNode(5,
    new TreeNode(3, new TreeNode(2), new TreeNode(4)),
    new TreeNode(8)
);
console.log(sumOfNodes(tree1)); // Expected: 22

const tree2 = new TreeNode(1);
console.log(sumOfNodes(tree2)); // Expected: 1

const tree3 = null;
console.log(sumOfNodes(tree3)); // Expected: 0

module.exports = { TreeNode, sumOfNodes };
