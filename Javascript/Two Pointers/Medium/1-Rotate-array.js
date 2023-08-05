/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums , k , nums.length - 1)
};
const reverse = function (nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
    return nums;

}

// Complexity O(N)
// Space Complexity O(1) as we use the same array
