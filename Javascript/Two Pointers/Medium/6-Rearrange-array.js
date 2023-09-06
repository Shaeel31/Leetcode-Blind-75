/**
 * @param {number[]} nums
 * @return {number[]}
 */


var rearrangeArray = function (nums) {
    let b = 1;
    while (b < nums.length) {
        if ((nums[b + 1] + nums[b - 1]) / 2 == nums[b]) {
            debugger
            let temp = nums[nums.length - 1];
            nums[nums.length - 1] = nums[b];
            nums[b] = temp;
            b = 1
        }
        else {
            b++
        }
    }
    return nums;
};
rearrangeArray([10,7,5,4,3])

//Time Complexity O(N^2)
//Space Complexity O(N)