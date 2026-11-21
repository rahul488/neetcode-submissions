class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (let token of tokens) {
            switch (token) {
                case "+": {
                    let a = stack.pop();
                    let b = stack.pop();
                    stack.push(a + b);
                    break;
                }
                case "-": {
                    let a = stack.pop();
                    let b = stack.pop();
                    stack.push(b-a);
                    break;
                }
                case "*": {
                    let a = stack.pop();
                    let b = stack.pop();
                    stack.push(a * b);
                    break;
                }
                case "/": {
                    let a = stack.pop();
                    let b = stack.pop();
                    stack.push(Math.trunc(b/a));
                    break;
                }
                default:
                    stack.push(+token);
            }
        }
        return stack.pop();
    }
}
