class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        const dq=[],res=[];

        let l=0,r=0;

        for(let r=0;r<nums.length;r++){

            while(dq.length && nums[dq[dq.length-1]] <= nums[r]){
                dq.pop();
            }
            dq.push(r);

            if(r+1 >= k){
               res.push(nums[dq[0]]);
               l++;
            }

            if(l > dq[0]){
                dq.shift();
            }
        }
        return res;

    }
}
