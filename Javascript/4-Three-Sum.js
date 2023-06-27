

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let c = nums[i];
        if (i > 0 && (c == nums[i - 1])) continue;
        let l = i + 1;
        let r = nums.length - 1
        while ((l < r)) {
            let sum = c + nums[l] + nums[r]
            if (sum == 0) {
                res.push([nums[i], nums[l], nums[r]]);
                l += 1;
                r -= 1
                while (nums[l] == nums[l - 1] && l < r) {
                    l += 1;
                }
            }
            else if (sum > 0) {
                r -= 1;
            }
            else if (sum < 0) {
                l += 1;
            }

        }
    }
    return res;
}

threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);


// Time Complexity O(n2)


