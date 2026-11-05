class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n= nums.length;
        let prefix=Array(n).fill(1);
        let suffix=Array(n).fill(1);
        prefix[0]=nums[0]
        suffix[n-1]=nums[n-1];
        for(let i=1;i<n;i++){
            prefix[i] =nums[i]*prefix[i-1];
        }
        for(let i=n-2;i>=0;i--){
            suffix[i] =nums[i]*suffix[i+1];
        }

        for(let i=1;i<n-1;i++){
            nums[i]=prefix[i-1]*suffix[i+1];
        }

        nums[0]= suffix[1];
        nums[n-1]= prefix[n-2];

        return nums;


    }
}
