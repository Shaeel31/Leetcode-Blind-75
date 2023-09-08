/**
 * Counts the number of subarrays in an array where the average
 * of the elements in each subarray is greater than or equal to
 * a specified threshold.
 * 
 * @param {number[]} arr - The input array of integers.
 * @param {number} k - The length of subarrays to consider.
 * @param {number} threshold - The threshold value for the average.
 * @return {number} - The count of subarrays meeting the condition.
 */
var numOfSubarrays = function (arr, k, threshold) {
    // Initialize the result counter to 0.
    let res = 0;

    // Calculate the initial sum of the first (k-1) elements in the array.
    let curSum = arr.slice(0, k - 1).reduce((acc, cr) => (acc + cr), 0);

    // Iterate through the array to find subarrays and check their averages.
    for (let L = 0; L < arr.length - k + 1; L++) {
        // Add the next element to the current sum to extend the subarray.
        curSum += arr[L + k - 1];

        // Check if the average of the current subarray is greater than or equal to the threshold.
        if (curSum / k >= threshold) {
            // If it meets the condition, increment the result counter.
            res++;
        }

        // Remove the first element of the subarray to move to the next one.
        curSum -= arr[L];
    }

    // Return the count of subarrays meeting the condition.
    return res;
};


// Complexity Analysis 

/* 
Time Complexity:

The initial calculation of curSum by slicing the first k-1 elements and using reduce takes O(k) time.

The for loop iterates from 0 to arr.length - k + 1, where arr.length - k + 1 represents the number of iterations needed to process subarrays of length k.
 Inside the loop, the following operations are performed in each iteration:

Adding the next element to curSum: O(1) constant time.
Checking if curSum / k is greater than or equal to threshold: O(1) constant time.
Incrementing res if the condition is met: O(1) constant time.
Subtracting the first element of the subarray from curSum: O(1) constant time.
Overall, the for loop performs a constant amount of work for each iteration, so the time complexity of the loop is O(arr.length - k + 1).

Combining the time complexity of all the components, the overall time complexity of the code is O(k) + O(arr.length - k + 1) = O(arr.length).

Space Complexity:

The space complexity is determined by the additional space used in the code.

res and curSum are two variables that occupy constant space regardless of the size of the input array, so they contribute O(1) space complexity.

The slice method creates a shallow copy of the array, which takes O(k) space for the slice.

The reduce method also uses some additional memory for its internal operations.

Therefore, the space complexity is dominated by the space required for the arr.slice(0, k - 1) operation, making the overall space complexity O(k).

In summary, the time complexity of the code is O(arr.length), and the space complexity is O(k).
 The time complexity is linear with respect to the length of the input array, and the space complexity is determined by the size of the subarray k.
 */