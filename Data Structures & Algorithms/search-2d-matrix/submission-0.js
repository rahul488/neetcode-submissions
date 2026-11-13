class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        for(let row of matrix){

            let l=0,r=row.length-1;

            while(l<=r){
                let mid = Math.floor((l+r)/2);

                if(target > row[mid]){
                    l=mid+1;
                }else if(target < row[mid]){
                    r=mid-1;
                }else{
                    return true;
                }
            }

        }
        return false;

    }
}
