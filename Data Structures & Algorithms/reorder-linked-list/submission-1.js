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
     * @return {void}
     */
    reorderList(head) {

        let slow=head;
        let fast = head.next;

        while(fast && fast.next){
            slow = slow.next;
            fast=fast.next.next;
        }

        let prev = null;
        let curr = slow.next;
        slow.next=null;
        //6 8 10 = 10 8 6
        while(curr){
          const next = curr.next;
          curr.next=prev;
          prev=curr;
          curr=next;
        }

        let curr1=head;
        let curr2=prev;
        //2 4 
        //8 6
        while(curr1 && curr2){
            const next1 = curr1.next;
            const next2 = curr2.next;
            curr1.next = curr2;
            curr2.next=next1;
            curr1=next1;
            curr2=next2;
        }
       
    }
}
