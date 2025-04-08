class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums) {
    return Math.max(nums[0], Math.max(this.helper(nums.slice(1)), this.helper(nums.slice(0 - 1))));
  }

  helper(nums) {
    let rob1 = 0,
      rob2 = 0;

    for (const n of nums) {
      let temp = Math.max(n + rob1, rob2);
      rob1 = rob2;
      rob2 = temp;
    }

    return rob2;
  }
}
