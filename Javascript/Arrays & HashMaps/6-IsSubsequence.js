/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length > t.length) return false;
    let subsequence = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[subsequence] == t[i]) {
            subsequence++
        }
    }
    return subsequence == s.length;
};

// Complexity Analysis

/*
The time complexity of this code is O(t),
 where 't' is the length of the string `t`. Here's why:

1. If the length of string `s` is greater than the length of string `t`, the function immediately returns `false`.
 This check is done in constant time, so it doesn't affect the overall time complexity.

2. If the length of string `s` is not greater than the length of string `t`,
 the function enters a loop that iterates through each character of string `t` (from index 0 to t.length - 1).

3. Inside the loop, the code checks if the current character of string `t` is equal to the current character of string `s`
 at the `subsequence` index. If they are equal, the `subsequence` counter is incremented.

4. Finally, after the loop, the code checks if the `subsequence` counter is equal to the length of string `s`.
 If it is, the function returns `true`, indicating that `s` is a subsequence of `t`.

Since the loop iterates through all characters of string `t` once, the time complexity of this code is O(t),
 where 't' is the length of string `t`. The length of string `s` does not affect the time complexity because the loop is determined by the length of `t`.
 */