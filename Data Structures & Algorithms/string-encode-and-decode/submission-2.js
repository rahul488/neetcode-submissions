class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        return strs.map((str) => str+"😐").join("")

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded_Str = str.split("😐");
        return decoded_Str.slice(0,decoded_Str.length-1)
    }
}
