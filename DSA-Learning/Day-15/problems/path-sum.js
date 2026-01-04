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
 * Problem: Path Sum
 * 
 * Given the root of a binary tree and an integer targetSum,
 * return true if the tree has a root-to-leaf path such that
 * adding up all the values equals targetSum.
 * A leaf is a node with no children.
 * 
 * Example:
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 *           5
 *          / \
 *         4   8
 *        /   / \
 *       11  13  4
 *      / \       \
 *     7   2       1
 * Output: true (5 → 4 → 11 → 2 = 22)
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity: O(h)
 */

function hasPathSum(root, targetSum) {
    // Your solution here

}

// Test cases
const tree1 = new TreeNode(5,
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
    new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
);
console.log(hasPathSum(tree1, 22)); // Expected: true

const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(hasPathSum(tree2, 5)); // Expected: false

module.exports = { TreeNode, hasPathSum };
