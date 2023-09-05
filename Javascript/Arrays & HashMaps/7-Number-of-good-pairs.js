/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let hashMap = {};
    let counter = 0
    for (let i = 0; i < nums.length; i++) {
        debugger
        if (hashMap.hasOwnProperty(nums[i])) {
            counter += hashMap[nums[i]]
            hashMap[nums[i]] = (hashMap[nums[i]] + 1)
        }
        else {
            hashMap[nums[i]] = (hashMap[nums[i]] + 1 || 1 )
        }
    }
    return counter;
};