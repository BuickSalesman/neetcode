class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findMin(nums) {
    let res = nums[0];
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
      if (nums[l] < nums[r]) {
        res = Math.min(res, nums[l]);
        break;
      }

      let m = Math.floor((l + r) / 2);
      res = Math.min(res, nums[m]);

      if (nums[m] >= nums[l]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }

    return res;
  }
}
