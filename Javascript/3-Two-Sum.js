/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let resultant = [];
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i +1 ; j<nums.length ; j++){
            if(nums[i] + nums[j] == target){
                resultant.push(i,j);
                break;
            }

        }
    }
    return resultant;
};