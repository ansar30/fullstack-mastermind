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
 * Problem: Binary Tree Postorder Traversal
 * 
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 * Postorder: Left → Right → Root
 * 
 * Example:
 * Input: root = [1,null,2,3]
 *     1
 *      \
 *       2
 *      /
 *     3
 * Output: [3,2,1]
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity: O(h) where h is tree height
 */

function postorderTraversal(root) {
    // Your solution here (try both recursive and iterative)

}

// Test cases
const tree1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(postorderTraversal(tree1)); // Expected: [3, 2, 1]

const tree2 = null;
console.log(postorderTraversal(tree2)); // Expected: []

const tree3 = new TreeNode(1);
console.log(postorderTraversal(tree3)); // Expected: [1]

module.exports = { TreeNode, postorderTraversal };
