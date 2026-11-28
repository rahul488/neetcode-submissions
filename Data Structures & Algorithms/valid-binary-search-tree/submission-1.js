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
     * @return {boolean}
     */
    isValidBST(root) {
        const left = this.isValid(root.left, -Infinity, root.val);
        const right = this.isValid(root.right, root.val, Infinity);

        return left && right;
    }
    isValid(root, min, max) {
        if (root === null) return true;

        if (root.val >= max || root.val <= min) return false;

        return this.isValid(root.left, min, root.val) && this.isValid(root.right, root.val, max);
    }
}
