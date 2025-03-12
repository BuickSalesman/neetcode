class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let result = "";
    for (let s of strs) {
      result += s.length + "#" + s;
    }
    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let result = [];
    let index1 = 0;

    while (index1 < str.length) {
      let index2 = index1;
      while (str[index2] !== "#") {
        index2 += 1;
      }

      let length = parseInt(str.substring(index1, index2));
      index1 = index2 + 1;
      index2 = index1 + length;
      result.push(str.substring(index1, index2));
      index1 = index2;
    }
    return result;
  }
}
