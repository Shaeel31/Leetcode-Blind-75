/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

    for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1

        while (i < j) {
            if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
                return true;
            }
            j--
        }
    }
return false;
};

// Complexity O(N)
