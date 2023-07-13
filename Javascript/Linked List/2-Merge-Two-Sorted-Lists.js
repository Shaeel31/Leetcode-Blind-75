
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function mergeList(l1, l2) {
    // create a dummy node to append all the nodes to that node.
    let dummy = new ListNode(0);
    let tail = dummy;

    // as the nodes are represented as objects in js
    // so we check if the node has a certain value and if it is less
    // than the value of the other node. If it is we append that node to the dummy node
    /// and we update our pointer to point to the newly added node
  
    while (l1 && l2) {
      if (l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }

    // These condition check for the remaining nodes of the list
    // if a list has any nodes left than that list is appended directly to
    // the end of the newly created list.
  
    if (l1) {
      tail.next = l1;
    }
  
    if (l2) {
      tail.next = l2;
    }
  
    return dummy.next;
  }
  
  mergeList([1,2,4] , [1,3,4])