var lengthOfLongestSubstring = function (s) {
    s = s.split('')
    let max = 0
    let set = new Set();
    let l_pointer = 0
    let r_pointer = 0

    while (r_pointer < s.length) {
        if (!set.has(s[r_pointer])) {
            set.add(s[r_pointer]);
            r_pointer++
            max = Math.max(max, set.size);
        }
        else {
            set.delete(s[l_pointer])
            l_pointer++
        }
    }
    return max;

};
lengthOfLongestSubstring("abcabcbb")


 // Time Complexity O(N)
// Space Complexity O(N)

// Formula = 