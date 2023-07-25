/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */


// Notes : So the lowest common ancestor is the element in the tree that has both p and q as decendants
// Important Note : IF the split occurs than that node is the lowest common ancestor of both the nodes as it 
// is not possile that the element in the left or right sub tree can be the ancestors



// We keep on searching in the left and right sub trees and return the element where the split occurs.
var lowestCommonAncestor = function (root, p, q) {
    let cur = root

    // while loop is used because it is guranted that the ancestor 
    // exists for both the nodes and it is not possible that we dont find an ancestor fpr both p & q.
    while (cur) {
        // If both p & q are greater than the root node than search in the right sub tree
        if (p.val > cur.val && q.val > cur.val) {
            cur = cur.right;
        }
        // If both p & q are less than the root node than search in the left sub tree
        else if (p.val < cur.val && q.val < cur.val) {
            cur = cur.left
        }
        // return the element where the split occurs
        else {
            return cur;
        }
    }
};

// Complexity O(log N)

