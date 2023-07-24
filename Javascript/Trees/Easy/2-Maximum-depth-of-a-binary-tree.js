/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return false;
    return Math.max(maxDepth(root.left) , maxDepth(root.right)) + 1
};

// Complexity O(N) as we will be visiting every node in order to get to the last node of the given tree 