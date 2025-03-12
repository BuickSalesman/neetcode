class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let map = new Map();
    let mapArray = [];
    let output = [];

    for (const n of nums) {
      map.set(n, (map.get(n) || 0) + 1);
    }

    mapArray = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
      output[i] = mapArray[i][0];
    }

    return output;
  }
}
