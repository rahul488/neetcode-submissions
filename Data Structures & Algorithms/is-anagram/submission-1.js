class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const freq1 = Array(26).fill(0);
        const freq2 = Array(26).fill(0);

        for(let i=0;i<s.length;i++){
            freq1[s[i].charCodeAt(0)-97]++;
        }
        for(let i=0;i<t.length;i++){
            freq2[t[i].charCodeAt(0)-97]++;
        }
        for(let i=0;i<26;i++){
            if(freq1[i] !== freq2[i]) return false;
        }
        return true;
    }
}
