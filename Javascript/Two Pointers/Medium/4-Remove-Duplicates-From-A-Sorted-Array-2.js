/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 1;
    let c = 1

    while (i < nums.length) {
        if (nums[i - 1] == nums[i] && c < 2) {
            c++
            i++
        }
        else if (nums[i - 1] == nums[i] && c >= 2) {
            nums.splice(i, 1);
        }
        else if (nums[i] !== nums[i - 1]){
            c = 1;
            i++
        }
    }
    return nums.length;
};

// Time Complexity  O(N)
// Space Complexity O(N)