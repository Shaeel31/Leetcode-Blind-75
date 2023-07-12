/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // make a prev variable initially set as null because when the list is reversed our 
    // first element of the list will be our last element and that will be pointing to null

    let [prev, cur] = [null, head]

    // Run a while loop as soon as we have a cur element meaning we have an element in the list
    // we cant run cur.next condition in while loop as it would not run on the last iteration

    while (cur) {
        // we declare another variable to keep the refrence of the next node in the list 
        // as when the refrence of the current node is broken we wont know that to which node 
        // our current node was pointing to, so we keep the refrence of the next node 
        // in a separate variable called nxt;

        let nxt = cur.next;
        // set the next method to point to the prev element
        cur.next = prev;
        // set the cur element to the prev element means the cur element is now pointing to the prev element

        prev = cur;
        cur = nxt
    }
    return prev;

};

// Complexity O(N)