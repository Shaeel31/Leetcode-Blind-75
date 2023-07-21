/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head || !head.next) return;
    // Get to the middle of the linkedlist
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = slow.next;
    let prev = null;
    slow.next = null

    while (second) {
        let temp = second.next;
        second.next = prev;
        prev = second;
        second = temp;
    }

    second = prev;
    let first = head;
    console.log(head)
    console.log(prev)
    while (second) {
        let [temp1, temp2] = [first.next, second.next]
        first.next = second
        second.next = temp1
        first = temp1
        second = temp2
    }

}


// Complexity O(n)