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
 * @return {boolean}
 */

// Important Notes

// We maintain a range when ever we go to the left or right nodes of the tree
// whenever we go to the left only max value is updated as in a BST all values to the
// left must be less than the root node. The max value is set to the root node.

// whenever we go to the right only min value is updated as in a BST all values to the
// right must be greater than the root node. The min value is set to the root node.

// Recurssion is used and whenever recursion is used first of all we satisfy base cases.
var isValidBST = function (root) {
    return validate(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};

const validate = function (root, min, max) {
    if (!root) {
        return true;
    }

    if (min != null &&  root.val <= min || max != null && root.val >= max) {
        return false;
    }

    return validate(root.left, min, root.val) && validate(root.right, root.val, max);
};

// Complexity O(N)  
// Reason : As we have to traverse all the nodes on the left sub tree and right sub tree
