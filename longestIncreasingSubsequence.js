class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  lengthOfLIS(nums) {
    const lis = new Array(nums.length).fill(1);

    for (let i = nums.length - 1; i >= 0; i--) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] < nums[j]) {
          lis[i] = Math.max(lis[i], 1 + lis[j]);
        }
      }
    }
    return Math.max(...lis);
  }
}
