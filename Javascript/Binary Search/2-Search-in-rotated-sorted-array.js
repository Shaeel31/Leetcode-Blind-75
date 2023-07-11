/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (target === nums[mid]) {
        return mid;
      }

      // left sorted portion
      if (nums[l] <= nums[mid]) {
        if (target > nums[mid] || target < nums[l]) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      // right sorted portion
      else {
        if (target < nums[mid] || target > nums[r]) {
          r = mid - 1;
        } else {
          l = mid + 1;
        }
      }
    }
    return -1;
  }


search([4, 5, 6, 7, 8, 1, 2, 3], 8);



        // if (target > nums[mid] && target <= nums[r]) {
        //     l = mid + 1;
        // }
        // else if (target < nums[mid] && target >= nums[l]) {
        //     r = mid - 1
        // }
        // else if (target > nums[mid] && target > nums[r]) {
        //     r = mid - 1
        // }
        // else if (target < nums[mid] && target < nums[l]) {
        //     l = mid + 1;
        // }