/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (!nums.length) return false;
  if (nums.length == 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.ceil(left + (right - left) / 2);

    /* If the midpoint element is less than the previous element it means that
       we have reached the minimum element as in a already sorted array which is 
       sorted in ascending order it is not possble that the previous element
       is greater than the next element */
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }
    /* Check if the left side of array is sorted in increasing order 
       and the middle element is greater than the last element 
       which means that right side is not sorted */

    if (nums[left] < nums[mid] && nums[mid] > nums[right]) {
      left = mid + 1;
    }
    else {
      right = mid - 1
    }
  }
  /*  return the value of left in case the array is rotated n 
      times means that we have already the minimum
      element pressent at the begining */
  return nums[left];
};

findMin([11, 13, 15, 17])

// Complexity 0(log n)