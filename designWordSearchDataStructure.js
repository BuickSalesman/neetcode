class TrieNode {
  constructor() {
    this.children = Array(26).fill(null);
    this.word = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  getIndex(c) {
    return c.charCodeAt(0) - "a".charCodeAt(0);
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let curr = this.root;
    for (const c of word) {
      const index = this.getIndex(c);
      if (curr.children[index] === null) {
        curr.children[index] = new TrieNode();
      }
      curr = curr.children[index];
    }
    curr.word = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    return this.dfs(word, 0, this.root);
  }

  dfs(word, j, root) {
    let curr = root;

    for (let i = j; i < word.length; i++) {
      const c = word[i];
      if (c === ".") {
        for (const child of curr.children) {
          if (child !== null && this.dfs(word, i + 1, child)) {
            return true;
          }
        }
        return false;
      } else {
        const index = this.getIndex(c);
        if (curr.children(index) === null) {
          return false;
        }
        curr = curr.children[index];
      }
    }
    return curr.word;
  }
}
