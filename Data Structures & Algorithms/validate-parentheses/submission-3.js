class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (let char of s) {
            if (char === "[" || char === "(" || char === "{") {
                stack.push(char);
            } else {
                const top = stack.pop();

                if(!top) return false;

                if (
                    (top === "{" && char !== "}") ||
                    (top === "[" && char !== "]") ||
                    (top === "(" && char !== ")")
                )
                    return false;
            }
        }
        return !stack.length;
    }
}
