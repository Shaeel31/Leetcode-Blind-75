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