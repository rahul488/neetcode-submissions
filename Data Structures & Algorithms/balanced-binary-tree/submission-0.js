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
    flag = true;
    isBalanced(root) {
        if (root === null) return this.flag;
        this.dfs(root);
        return this.flag;
    }
    dfs(root) {
        if (root === null) return 0;

        const left = 1 + this.dfs(root.left);
        const right = 1 + this.dfs(root.right);

        if (left > right && left - right > 1) this.flag = false;

        if (right > left && right - left > 1) this.flag = false;

        return Math.max(left, right);
    }
}
