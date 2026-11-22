class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        let res=Array(temperatures.length).fill(0);
        let stack = [];

        for(let i=0;i<temperatures.length;i++){
            const temperature = temperatures[i];
            while(stack.length > 0 &&  temperature > stack[stack.length-1][0]){
                const [t,idx] = stack.pop();
                res[idx]=i-idx;
            }
            stack.push([temperature,i]);

        }
        return res;
    }
}
