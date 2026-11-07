class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res=0;
        // for(let i=0;i<height.length;i++){

        //     let lMax=height[i],rMax=height[i];

        //     for(let j=0;j<i;j++){
        //         lMax=Math.max(height[j],lMax);
        //     }
        //     for(let j=i+1;j<height.length;j++){
        //         rMax = Math.max(rMax,height[j]);
        //     }
        //     res+=Math.min(lMax,rMax)-height[i]
        // }

        let l=0,r=height.length-1;
        let lMax= height[l],rMax=height[r];
        while(l < r){
           
            if(lMax < rMax){
                l++;
                lMax= Math.max(lMax,height[l]);
                res+=lMax-height[l];
            }else{
                r--;
                rMax = Math.max(rMax,height[r]);
                res+=rMax-height[r];
            }
        }
       return res;

    }
}
