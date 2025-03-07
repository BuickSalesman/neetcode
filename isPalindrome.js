class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */

  isAlNum(char) {
    return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z") || (char >= "0" && char <= "9");
  }

  isPalindrome(s) {
    let newString = "";
    for (let c of s) {
      if (this.isAlNum(c)) {
        newString += c.toLowerCase();
      }
    }
    return newString === newString.split("").reverse().join("");
  }
}
