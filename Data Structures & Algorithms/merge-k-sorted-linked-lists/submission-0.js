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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let ar = [];

        for (let list of lists) {
            while (list !== null) {
                ar.push(list.val);
                list = list.next;
            }
        }
        ar.sort((a, b) => a - b);
        let dummy = new ListNode();
        let temp = dummy;
        for (let val of ar) {
            temp.next = new ListNode(val);
            temp = temp.next;
        }
        return dummy.next;
    }
}
