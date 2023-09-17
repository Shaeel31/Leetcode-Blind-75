/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let initCount = 0;
    let max = []
    let set = ['a', 'e', 'i', 'o', 'u'];
    s.slice(0, k - 1).split('').forEach(x => {
        if (set.includes(x)) {
            initCount++
        }
    })
    debugger
    for (let L = 0; L < s.length - k + 1; L++) {
        if (set.includes(s[L + k - 1])) {
            initCount++
            if (initCount == k) {
                return initCount;
            }
            continue;
        }
        max.push(initCount);
        initCount = 0
    }
    return Math.max(...max);
};

maxVowels("aeiou", 2)