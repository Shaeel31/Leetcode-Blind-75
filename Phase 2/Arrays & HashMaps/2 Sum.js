/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let dict = {}
    for (let i = 0; i < nums.length; i++) {
        let val = target - nums[i];
        if (dict.hasOwnProperty(val)) {
            return [dict[val] , i];
        }
        else {
            dict[nums[i]] = i
        }
    }
    return [];

};

twoSum([2,7,11,15] , 9)