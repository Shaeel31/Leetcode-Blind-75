/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let hashMap = {}
    let res = [] // [duplicate , missing]

    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = (hashMap[nums[i]] || 0) + 1
    }
    // we iterate through 1 to nums.length because in the problem description
    // it is clearly mentioned that the orignal array contains value from
    // 1 to n where n is the length of an array.
    
    for (let i = 1; i <= nums.length; i++) {
        if (hashMap[i] === 2) {
            res[0] = i;
        }
        if (!hashMap[i]) {
            res[1] = i;
        }
    }

    return res
};