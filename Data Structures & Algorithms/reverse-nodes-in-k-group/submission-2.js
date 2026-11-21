/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let curr = head;
        const dummy = new ListNode(0,head);
        let dummy2 = dummy;
        while (true) {
            let count = 0;
            let kthNode = curr;
            while (count < k && kthNode) {
                count++;
                kthNode = kthNode.next;
            }
            if (count < k) {
                dummy2.next = curr;
                break;
            }
            let prev = null;
            let groupTail = curr;
            while (curr && count > 0) {
                count--;
                const next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            dummy2.next = prev;
            dummy2 = groupTail;
        }
        return dummy.next;
    }
}
