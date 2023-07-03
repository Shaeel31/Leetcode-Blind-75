/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// var characterReplacement = function (s, k) {
//     s = s.split('');
//     let hashMap = {}
//     let max_freq = 0;
//     let a_pointer = 0;
//     let b_pointer = 0
//     for (let i = 0; i < s.length; i++) {
//         if (!hashMap[(s[i])]) {
//             hashMap[s[i]] = 1
//         }
//         else {
//             hashMap[s[i]] = hashMap[s[i]] + 1
//         }
//         if ((i - a_pointer + 1) - Math.max(...Object.values(hashMap)) <= k) {
//             max_freq = Math.max(max_freq ,( i - a_pointer + 1) );
//             b_pointer++
//         }
//         else {
//             hashMap[s[a_pointer]] = hashMap[s[a_pointer]] - 1
//             a_pointer++
//         }
//     }
//    return max_freq;
// };

// characterReplacement("BAAA", 0)


//Complexity : O(N * 26)


//Formula :
// window_length - max_freq <= k


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let reverseds1 = s1.split('').reverse().join('');
    s2 = s2.split('')
    let b_pointer = 0
    let x = ""
    while (b_pointer < s2.length) {
        x = x.concat(s2[b_pointer])
        if (x === s1 || x === reverseds1) {
            console.log( true);
        }
        else {
            b_pointer++
        }
    }
    console.log( false);
}

checkInclusion("ab", "eidbaooo");