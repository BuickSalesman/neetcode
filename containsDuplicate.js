class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    let mySet = new Set();

    for (const number of nums) {
      if (mySet.has(number)) {
        return true;
      }
      mySet.add(number);
    }
    return false;
  }
}
