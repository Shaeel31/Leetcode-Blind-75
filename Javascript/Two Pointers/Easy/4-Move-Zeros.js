var moveZeroes = function(nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap the non-zero element with the element at counter position
            [nums[counter], nums[i]] = [nums[i], nums[counter]];
            counter++;
        }
    }
    while (counter < nums.length) {
        nums[counter] = 0;
        counter++;
    }
    return nums;
};

// Complexity O(N)

// This approach has a linear time complexity of O(n), where n is the length of the array, and doesn't involve inefficient array modifications,
// so it should avoid the memory issues you were encountering.