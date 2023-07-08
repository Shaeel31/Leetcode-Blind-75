/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
    let aHash = {}
    let bHash = {}
    for (let i = 0; i < t.length; i++) {
        bHash[t[i]] = (bHash[t[i]] || 0) + 1
    }
    let left = 0;
    let res = [-1, -1]
    let minLengthSubstring = Infinity
    let have = 0; need = Object.keys(bHash).length;
    for (let j = 0; j < s.length; j++) {
        let cr = s[j];
        aHash[cr] = (aHash[cr] || 0) + 1
        if (cr in bHash && bHash[cr] == aHash[cr]) have += 1;

        while (have == need) {
            if (j - left + 1 < minLengthSubstring) {
                minLengthSubstring = j - left + 1
                res = [left, j]
            }
            aHash[s[left]] -= 1
            if (s[left] in bHash && aHash[s[left]] < bHash[s[left]]) {
                have -= 1
            }
            left++
        }

    }
    let [begin, end] = res
    return s.substring(begin, end + 1)
}

minWindow("ADOBECODEBANC", "ABC")