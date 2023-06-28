/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/ /g, '');
    let c = s.split('').reverse().join('')
    if (c == s) return true;
    return false;
};