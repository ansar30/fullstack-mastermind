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
 * Problem: Binary Tree Maximum Path Sum
 * 
 * A path in a binary tree is a sequence of nodes where each pair of
 * adjacent nodes has an edge connecting them. A node can only appear
 * once in the sequence. The path does not need to pass through the root.
 * 
 * Return the maximum path sum of any non-empty path.
 * 
 * Example:
 * Input: root = [1,2,3]
 *     1
 *    / \
 *   2   3
 * Output: 6 (2 + 1 + 3)
 * 
 * Example 2:
 * Input: root = [-10,9,20,null,null,15,7]
 *      -10
 *      / \
 *     9  20
 *       /  \
 *      15   7
 * Output: 42 (15 + 20 + 7)
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity: O(h)
 * 
 * This is a HARD problem! Take your time.
 */

function maxPathSum(root) {
    // Your solution here
    // Hint: Use a helper function and track global max

}

// Test cases
const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(maxPathSum(tree1)); // Expected: 6

const tree2 = new TreeNode(-10,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(maxPathSum(tree2)); // Expected: 42

module.exports = { TreeNode, maxPathSum };
