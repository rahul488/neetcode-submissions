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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let res = [];
        const dfs = (root) => {
            if (root === null) {
                res.push("null");
                return;
            }

            res.push(root.val);
            dfs(root.left);
            dfs(root.right);
        };

        dfs(root);
        return res.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const ar = data.split(",");
        let i = 0;
        const dfs = () => {
            if (ar[i] === "null") {
                i++;
                return null;
            }
            const node = new TreeNode(Number(ar[i]));
            i++;
            node.left = dfs();
            node.right = dfs();

            return node;
        };

        return dfs();
    }
}
