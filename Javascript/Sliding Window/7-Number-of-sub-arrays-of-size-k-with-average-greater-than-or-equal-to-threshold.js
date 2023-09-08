/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let res = 0;
    let curSum = arr.slice(0, k - 1).reduce((acc, cr) => (acc + cr), 0)

    for (let L = 0; L < arr.length - k + 1; L++) {
        curSum += arr[L + k - 1]
        if (curSum / k >= threshold) {
            res++
        }
        curSum -= arr[L]
    }
    return res;
};