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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;
    if(isSameTree(root,subRoot)) return true;
    return isSubtree(root.left , subRoot) || isSubtree(root.right , subRoot);
};

var isSameTree = function (s, r) {
    if (!s && !r) return true;
    if ((s && r) && (s.val == r.val)) {
        return (isSameTree(s.left, r.left) && isSameTree(s.right, r.right))
    }
    return false;
}

// Complexity O(S*Q)