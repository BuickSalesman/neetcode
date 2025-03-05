# this is my bas solution:


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_dic = {}
        t_dic = {}

        for letter in s:
            if letter in s_dic:
                s_dic[letter] += 1
            else:
                s_dic[letter] = 1

        for letter in t:
            if letter in t_dic:
                t_dic[letter] += 1
            else:
                t_dic[letter] = 1

        return s_dic == t_dic

# this is the real solution:


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        return sorted(s) == sorted(t)
