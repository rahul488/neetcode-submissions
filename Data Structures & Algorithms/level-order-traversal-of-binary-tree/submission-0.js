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
     * @return {number[][]}
     */
    map = new Map();
    levelOrder(root) {
        if (root === null) return [];

        this.los(root, 0);
        return [...this.map.values()];
    }
    los(root, h) {
        if (root === null) return;
        this.map.set(h, [...(this.map.get(h) ?? []), root.val]);

        this.los(root.left, h + 1);
        this.los(root.right, h + 1);
    }
}
