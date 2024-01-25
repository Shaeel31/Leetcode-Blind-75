/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    let isIncreasing = false;
    let isDecreasing = false;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j - 1] == nums[j]) {
            continue;
        }
        if (nums[j - 1] > nums[j]) {
            isDecreasing = true
            break;
        }
        else if (nums[j - 1] < nums[j]) {
            isIncreasing = true;
            
        }
    }

    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] == nums[i]) {
            continue;
        }
        if ((nums[i - 1] < nums[i]) && isDecreasing) {
            return false;
        }
        if ((nums[i - 1] > nums[i]) && isIncreasing) {
            return false;
        }
    }
    return true;
};

// optimised soloution

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    let isIncreasing = false;
    let isDecreasing = false;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j - 1] === nums[j]) {
            continue;
        }
        if (nums[j - 1] > nums[j]) {
            isDecreasing = true;
        } else {
            isIncreasing = true;
        }

        if (isIncreasing && isDecreasing) {
            return false;
        }
    }

    return true;
};
