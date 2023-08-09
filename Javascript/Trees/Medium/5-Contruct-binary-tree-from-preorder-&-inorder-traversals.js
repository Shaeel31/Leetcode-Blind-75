/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
           return null;
       }
   // Get the root node as in preorder the first node is always the root node
       let root = new TreeNode(preorder[0]);
       
   // Find that node in the inorder tree and once that root is found all the elements to its left belong to the left sub tree
   // And all the elements to it's right belong to the right sub tree
   
       let mid = inorder.findIndex(x => x == preorder[0]);

       
       // Use the recursive approach and keep on calling the function to make left and right sub trees
       //In the left sub tree for preorder we start from 1 as 0 index is the root node and 
       // slice up unitil mid elelement in preorder array as we have to slice up until index of the root node in inorder array.  
       root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));

       // Same for the right sub tree for preorder array we start at the mid up until the end and 
       // for in order array we start from the mid  up until the end as the positions of the elements in preorder
       // and in order arrays are already sorted
       root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

       // The root is returned at the end as we have to return the root of newly created tree
       return root;
   };

   buildTree([10,20,40,50,30,60] , [40,20,50,10,60,30])

   //Complexity : O(N)

