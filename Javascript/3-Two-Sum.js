/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {};
    let result = []
    for(let i = 0; i< nums.length; i++){
        let x = target - nums[i];
        if(hashMap.hasOwnProperty(x)){
           result.push(hashMap[x] , i)
           break;
        }
        hashMap[nums[i]] = i
    }
return result
};


// Time Complexity O(n)