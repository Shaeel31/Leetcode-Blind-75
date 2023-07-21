/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left_pointer = 0
    let right_pointer = height.length - 1;
    let max_height = 0

    while (left_pointer < right_pointer) {
    let cH = (right_pointer - left_pointer) * Math.min(height[left_pointer], height[right_pointer])
        max_height = Math.max(cH, max_height)
        if(height[left_pointer] < height[right_pointer]){
            left_pointer++
        }
        else if (height[left_pointer] > height[right_pointer]) {
        right_pointer--
        }
        else {
            right_pointer--
        }
    }
    return max_height
};

// Complexity O(n)
// space complexity o(n)