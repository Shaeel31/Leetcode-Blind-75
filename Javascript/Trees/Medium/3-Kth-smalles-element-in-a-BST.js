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
 * @param {number} k
 * @return {number}
 */


var kthSmallest = function (root, k) {
    let stack = [];
    let curr = root;
    while (stack.length !== 0 || curr) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop();
        k--
        if (k == 0) {
            return curr.val;
        }
        curr = curr.right;
    }
};


// Complexity O(n) - as we have to visit all the nodes of a BST

// Important Notes: We keep on going to the left until we reach the null node.
// The current elemtent is pushed on to the stack to keep track of the root node
// when ever we reach the null node we pop the element because it is the root of that 
// subtree and we go to the right.

// Apporach used : Iterative

// Refrence : https://www.youtube.com/watch?v=5LUXSvjmGCw&ab_channel=NeetCode