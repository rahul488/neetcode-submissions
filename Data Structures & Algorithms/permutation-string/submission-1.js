class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) return false;

        const freq1 = new Map();
        for (let i = 0; i < s1.length; i++) {
            freq1.set(s1[i], (freq1.get(s1[i]) || 0) + 1);
        }

        for (let i = 0; i < s2.length; i++) {
            const freq2 = new Map();
            let match = 0;
            for (let j = i; j < s2.length; j++) {
                freq2.set(s2[j], (freq2.get(s2[j]) || 0) + 1);
                if ((freq1.get(s2[j]) || 0) < freq2.get(s2[j])) {
                    break;
                }
                if ((freq1.get(s2[j]) || 0) === freq2.get(s2[j])) {
                    match++;
                }
                if (match === freq1.size) return true;
            }
        }
        return false;
    }
}
