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
    res = 0;
    diameterOfBinaryTree(root) {
        this.dfs(root, this.res);
        return this.res;
    }
    dfs(root, res) {
        if (root === null) return 0;
        const left = this.dfs(root.left, res);
        const right = this.dfs(root.right, res);
        this.res = Math.max(left + right, this.res);
        return 1 + Math.max(left, right);
    }
}
