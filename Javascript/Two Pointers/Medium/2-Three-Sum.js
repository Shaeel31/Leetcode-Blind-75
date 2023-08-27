/**
 * @param {number[]} nums - The input array of numbers
 * @return {number[][]} - An array containing arrays of three numbers that sum up to zero
 */
var threeSum = function (nums) {
    // Sort the input array in ascending order
    nums = nums.sort((a, b) => a - b);
    
    // Initialize an array to store the resulting triplets
    let res = [];
    
    // Iterate through each element in the sorted array
    for (let i = 0; i < nums.length; i++) {
        // Current element under consideration
        let c = nums[i];
        
        // Skip duplicate elements by checking against the previous element
        if (i > 0 && c === nums[i - 1]) continue;
        
        // Initialize pointers to find the other two elements for the triplet
        let [l, r] = [i + 1, nums.length - 1];
        
        // Loop to find the other two elements
        while (l < r) {
            // Calculate the sum of the three elements
            let s = c + nums[l] + nums[r];
            
            if (s === 0) {
                // If the sum is zero, a valid triplet is found
                
                // Add the triplet to the result array
                res.push([c, nums[l], nums[r]]);
                
                // Increment left pointer and decrement right pointer
                l++;
                r--;
                
                // Skip duplicates by advancing the left pointer
                while (l < r && nums[l - 1] === nums[l]) {
                    l++;
                }
            } else if (s > 0) {
                // If the sum is greater than zero, decrement the right pointer
                r--;
            } else if (s < 0) {
                // If the sum is less than zero, increment the left pointer
                l++;
            }
        }
    }
    
    // Return the array containing all the unique triplets
    return res;
};

// Test the function with an example input
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
