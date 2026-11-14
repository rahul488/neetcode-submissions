class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {

        let l=0,r=nums.length-1;

        if(nums[0] <= nums[r]) return nums[0];

        while(l <= r){
            let mid = Math.floor((l+r)/2);

            if(nums[mid] > nums[r]){
                l=mid+1;
            }else if(mid-1 >= 0 && nums[mid] < nums[mid-1]){
                return nums[mid];
            }else{
                r=mid-1;
            }
        }
        return -1;

    }
}
