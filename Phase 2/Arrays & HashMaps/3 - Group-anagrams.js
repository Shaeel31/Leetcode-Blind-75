/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let dict = {}

    for (let i = 0; i < strs.length; i++) {
        let cur = strs[i];
        let sorted = strs[i].split('').sort().join('');
        if (!dict[sorted]) {
            dict[sorted] = [cur];
        }
        else {
            dict[sorted].push(cur);
        }
    }

    return Object.values(dict);

};