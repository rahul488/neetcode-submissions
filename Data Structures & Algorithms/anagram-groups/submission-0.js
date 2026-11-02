class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res= strs.reduce((acc,str) => {
            const sortedVal = str
                .split("")
                .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
                .join("");
            acc.set(sortedVal, [...(acc.get(sortedVal) || []), str]);
            return acc;
        }, new Map());

        return [...res.values()]
    }
}
