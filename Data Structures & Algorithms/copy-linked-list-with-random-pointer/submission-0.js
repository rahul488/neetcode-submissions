// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    map = new Map();
    copyRandomList(head) {
        if (!head) return null;

        const copyHead = this.recur(head);

        let curr = head;
        let copy = copyHead;

        while (curr) {
            copy.random = this.map.get(curr.random) ?? null;

            curr = curr.next;
            copy = copy.next;
        }

        return copyHead;
    }

    recur(curr) {
        if (!curr) return null;

        const node = new Node(curr.val,this.recur(curr.next));

        this.map.set(curr, node);

        return node;
    }
}
