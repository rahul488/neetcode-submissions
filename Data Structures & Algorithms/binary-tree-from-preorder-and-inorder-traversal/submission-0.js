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
    buildTree(preorder, inorder) {
        const map = new Map();

        for (let i = 0; i < inorder.length; i++) {
            map.set(inorder[i], i);
        }

        let preIndex = 0;

        const build = (left, right) => {
            if (left > right) return null;

            // First element in preorder is root
            const rootVal = preorder[preIndex++];

            const root = new TreeNode(rootVal);

            // Find root in inorder
            const mid = map.get(rootVal);

            // Build left subtree first
            root.left = build(left, mid - 1);

            // Build right subtree
            root.right = build(mid + 1, right);

            return root;
        };

        return build(0, inorder.length - 1);
    }
}
