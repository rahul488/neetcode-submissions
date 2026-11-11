class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        const tfreq = new Map();
        for(let i=0;i<t.length;i++){
            tfreq.set(t[i],(tfreq.get(t[i]) || 0)+1);
        }

        let left=0,have=0,min=Infinity,minStr="";
        const sfreq = new Map();
        for(let i=0;i<s.length;i++){
            if(tfreq.has(s[i])){
                sfreq.set(s[i],(sfreq.get(s[i]) || 0)+1);
                if(sfreq.get(s[i]) === tfreq.get(s[i])){
                    have++;
                }
            }
            //OUZODYXAZVXYZ
            while(have === tfreq.size){
                if(i-left+1 < min){
                    minStr = s.substring(left,i+1);
                    min = i-left+1;
                }
                if(tfreq.has(s[left])){
                    if(tfreq.get(s[left]) === sfreq.get(s[left])){
                        have--;
                    }
                    sfreq.set(s[left],sfreq.get(s[left])-1);
                }
                left++;
            }
        }
        return minStr;
    }

}
