

// Soloution 1 - With 0(N) Time Complexity

/**
 * @param {string} string
 * @return {boolean}
 */
const isPalindrome = function (string) {
    string = (string.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/ /g, '')).split('') ;
    let l = 0;
    let r = string.length - 1
    while (l < r) {
        if (string[l] == string[r]) {
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

// const isPalindrome = function (string) {
//     string = string.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/ /g, '')
//     return(( string) === string.split('').reverse().join(''))
// };

isPalindrome("race a car")

