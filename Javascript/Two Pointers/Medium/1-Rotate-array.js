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

// Important Notes : 

// So the Trick is we rotate the array 3 times 
// 1st Step : The entire array is reversed.

// Given array : [1,2,3,4,5,6,7]
// O/P : [7,6,5,4,3,2,1]

// 2nd Step : We reverse the array from 0th index to k index 

// Given array : [7,6,5,4,3,2,1]
// O/P : [5,6,7,4,3,2,1]

// 3rd Step : We reverse the array from k index to the last index 
// Given array : [5,6,7,4,3,2,1]
// O/P : [5,6,7,1,2,3,4]

// Complexity O(N)
// Space Complexity O(1) as we use the same array
// Time complexity is  O(k) as well have to visit the array at most k times
 