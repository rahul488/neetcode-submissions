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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let prev = this.reverse(head);
        let i = 0;
        let curr = prev;
        head = curr;
        while (curr) {
            i++;
            if(n==1){
                head=curr.next;
                break;
            }
            else if (i == n) {
                prev.next = curr.next;
                curr.next = null;
                curr = null;
                if(n==1) return prev.next;
                break;
            }
            prev = curr;
            curr = curr.next;
        }
        return this.reverse(head);
    }
    reverse(curr) {
        let prev = null;
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}
