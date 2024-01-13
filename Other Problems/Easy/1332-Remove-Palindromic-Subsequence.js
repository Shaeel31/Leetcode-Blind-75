/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
    let rpl = s.split('').reverse().join('')
    if (rpl == s) return 1;
    // let s = s.split('').reverse().join()
    return [...new Set(rpl)].length;
};