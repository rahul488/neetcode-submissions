class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let j=0,ls=0;
        for(let i=0;i<s.length;i++){
            let currStr = s.substring(j,i);

            if(!currStr.includes(s[i])){
                currStr+=s[i];
                ls = Math.max(ls,currStr.length);
            }else{
                while(currStr.includes(s[i])){
                    currStr = currStr.substring(1);
                    j++;
                }
            }

        }
        return ls;
    }
}
