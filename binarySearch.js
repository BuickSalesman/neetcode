class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let [l, r] = [0, nums.length - 1];

    while (l <= r) {
      let m = l + Math.floor((r - l) / 2);

      if (nums[m] > target) {
        r = m - 1;
      } else if (nums[m] < target) {
        l = m + 1;
      } else {
        return m;
      }
    }

    return -1;
  }
}
