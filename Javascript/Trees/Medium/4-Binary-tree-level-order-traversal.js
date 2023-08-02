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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let queue = []
    let resultant = []
    if (!root) return queue;
    queue.unshift(root);
    while (queue.length) {
        let queueLth = queue.length;
        let level = []
        for (let i = 0; i < queueLth; i++) {
            let node = queue.shift();
            if (node) {
                level.push(node.val);
                queue.push(node.left)
                queue.push(node.right)

            }
        }
        if (level.length) { resultant.push(level) };
    }
    return resultant;
};

// Complexity O(N) 
// Reason : we will be visiting every node at once
