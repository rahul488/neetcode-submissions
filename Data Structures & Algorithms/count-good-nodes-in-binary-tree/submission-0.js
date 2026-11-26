/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    count = 0;
    goodNodes(root) {
        if(root === null) return this.count;
        this.fMax(root,root.val)
        return this.count;
    }
    fMax(root, max) {
        if (root === null) return;
        if (root.val >= max) {
            max = root.val;
            this.count++;
        }
        this.fMax(root.left,max);
        this.fMax(root.right,max);
    }
}
