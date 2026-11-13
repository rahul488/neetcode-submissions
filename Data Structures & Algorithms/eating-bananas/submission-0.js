class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = Math.max(...piles);

        let l=1,r=max,min=max;

        while(l <= r){
            let mid = Math.floor((l+r)/2);
            let hrTaken=0;
            for(let pile of piles){
                hrTaken+=Math.ceil(pile/mid);
            }
            if(hrTaken <= h){
                min=mid;
                r=mid-1
            }else{
                l=mid+1;
            }
        }
        return min;


    }
}
