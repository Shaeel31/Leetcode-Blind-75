/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
    if (t === "") return "";

    let countT = {};
    let window = {};
    for (let c of t) {
        countT[c] = 1 + (countT[c] || 0);
    }

    let have = 0;
    let need = Object.keys(countT).length;
    let res = [-1, -1];
    let resLen = Infinity;
    let l = 0;

    for (let r = 0; r < s.length; r++) {
        let c = s[r];
        window[c] = 1 + (window[c] || 0);

        if (c in countT && window[c] === countT[c]) {
            have += 1;
        }

        while (have === need) {
            if (r - l + 1 < resLen) {
                res = [l, r];
                resLen = r - l + 1;
            }
            window[s[l]] -= 1;
            if (s[l] in countT && window[s[l]] < countT[s[l]]) {
                have -= 1;
            }
            l += 1;
        }
    }

    let [left, right] = res;
    return resLen !== Infinity ? s.substring(left, right + 1) : "";
}

// Complexity O(M + N)