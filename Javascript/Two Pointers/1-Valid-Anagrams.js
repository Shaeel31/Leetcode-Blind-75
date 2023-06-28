

// Soloution 1 - With 0(N) Time Complexity

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/ /g, '');
    s = s.split('');
    let l = 0;
    let r = s.length - 1
    while (l < r) {
        if (s[l] == s[r]) {
            l++;
            r--
        }
        else {
            return false;
        }
    }
    return true;
};

// Soloution 2 - Shorter Version

var isPalindrome = function (string) {
    string = string.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/ /g, '')
    return(( string) === string.split('').reverse().join(''))
};

