/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let lp = new Array(height.length).fill(0);
    let rp = new Array(height.length).fill(0);
    let lrMin = new Array(height.length).fill(0)
    let max = 0
    for (let i = 0; i < height.length - 1; i++) {
        if (height[i] > max) max = height[i];
        lp[i + 1] = max;
    }
    max = 0
    for (let j = height.length - 1; j > 0; j--) {
        if (height[j] > max) max = height[j];
        rp[j - 1] = max;
    }
    let sum = 0
    for (let k = 0; k < height.length; k++) {
        lrMin[k] = Math.min(lp[k], rp[k])
        sum += (lrMin[k] - height[k]) > 0 ? lrMin[k] - height[k] : 0
    }
    return sum

};

trap()