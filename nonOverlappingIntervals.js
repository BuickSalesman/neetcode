class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number}
   */
  eraseOverlapIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = 0;
    let lastEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
      const start = intervals[i][0];
      const end = intervals[i][1];

      if (start >= lastEnd) {
        lastEnd = end;
      } else {
        res++;
        lastEnd = Math.min(end, lastEnd);
      }
    }
    return res;
  }
}
