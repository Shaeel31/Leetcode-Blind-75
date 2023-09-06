/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 1st Soloution 

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


// 2nd Soloution 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const n = nums.length;
    const result = new Array(n);

    let left = 0;
    let right = n - 1;
    let index = 0;

    while (left <= right) {
        if (index % 2 === 0) {
            // Place the larger numbers in the result array for even indices
            result[index] = nums[right];
            right--;
        } else {
            // Place the smaller numbers in the result array for odd indices
            result[index] = nums[left];
            left++;
        }
        index++;
    }

    return result;
};

//Time Complexity O(N)
//Space Complexity O(N)