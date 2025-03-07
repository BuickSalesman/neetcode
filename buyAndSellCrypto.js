class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let [l, r] = [0, 1];
    let maxProfit = 0;

    while (r < prices.length) {
      if (prices[l] < prices[r]) {
        let profit = prices[r] - prices[l];
        maxProfit = Math.max(maxProfit, profit);
      } else {
        l = r;
      }

      r += 1;
    }
    return maxProfit;
  }
}
