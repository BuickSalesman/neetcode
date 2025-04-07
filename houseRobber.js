class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums) {
    let one = 0,
      two = 0;

    for (const n of nums) {
      let temp = Math.max(n + one, two);
      one = two;
      two = temp;
    }

    return two;
  }
}
