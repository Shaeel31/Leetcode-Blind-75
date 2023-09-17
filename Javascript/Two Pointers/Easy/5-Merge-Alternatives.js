/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let r = 0;
    let greater = Math.max(word1.length, word2.length)
    let el = ""
    while (r < greater) {
        let elw1 = typeof word1[r] === 'undefined' ? '' : word1[r];
        let elw2 = typeof word2[r] === 'undefined' ? '' : word2[r];
        el += elw1;
        el += elw2
        r++
    }
    
        return el;
}

// Complexity = O([Greater word length])