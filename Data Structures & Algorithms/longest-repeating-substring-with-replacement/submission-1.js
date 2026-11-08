class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
       const freq = new Map();
       let maxLen=0;
       let maxFreq=0;
       let left=0;
       for(let i=0;i<s.length;i++){
            freq.set(s[i],(freq.get(s[i]) || 0)+1);
            maxFreq = Math.max(maxFreq,freq.get(s[i]))
            let charToreplace = (i-left+1)-maxFreq;

            if(charToreplace <= k){
                maxLen = Math.max(maxLen,i-left+1);
            }

            while(charToreplace > k){
                freq.set(s[left],freq.get(s[left])-1);
                left++;
                charToreplace--;
            }

       }
       return maxLen;

    }
}
