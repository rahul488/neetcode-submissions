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
    max = -Infinity;
    maxPathSum(root) {
        this.dfs(root);

        return this.max;
    }
    dfs(root) {
        if (!root) return 0;
        const left = Math.max(0, this.dfs(root.left));
        const right = Math.max(0, this.dfs(root.right));
        let crossSum = left + right + root.val;
        this.max = Math.max(crossSum, this.max);

        return root.val + Math.max(left, right, 0);
    }
}
