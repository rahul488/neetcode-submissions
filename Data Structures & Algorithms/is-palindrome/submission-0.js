class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        s = s.split(" ").join("").replace(/[^A-Za-z0-9]/g, "").toLocaleLowerCase();

        return s === s.split("").reverse().join("")
       
    }
}
