class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let j=0,profit=0;

        for(let i=1;i<prices.length;i++){
            if(prices[i] < prices[j]){
                j=i;
            }else{
                profit = Math.max(profit,prices[i]-prices[j])
            }
        }
        return profit;

    }
}
