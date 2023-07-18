/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let pre = null
    for (let i = 0; i < lists.length; i++) {
        pre = mergeTwoLists(pre, lists[i]);
    }
    return pre;
};
mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode(0);
    tail = dummy
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1
            l1 = l1.next
        }
        else {
            tail.next = l2
            l2 = l2.next
        }
        tail = tail.next
    }
    tail.next = l1 || l2
    return dummy.next
}