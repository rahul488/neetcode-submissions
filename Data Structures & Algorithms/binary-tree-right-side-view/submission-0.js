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
     * @return {number[]}
     */
    map=new Map();
    rightSideView(root) {

        if(root === null) return [];


        this.lot(root,0);

        return [...this.map.values()].map((ar) => ar[ar.length-1]);
        

    }
    lot(root,h){
        if(root === null) return null;

        this.map.set(h,[...(this.map.get(root.val) ?? []),root.val])

        this.lot(root.left,h+1);
        this.lot(root.right,h+1);
    }
}
