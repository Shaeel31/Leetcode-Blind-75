const numOfSubarrays = (arr, k, threshold) => {
    let count = 0;

    for (let i = 0; i <= arr.length - k; i++) {
        let sum = 0;
        
        // Calculate the sum of elements in the current subarray of size 'k'
        for (let j = i; j < i + k; j++) {
            sum += arr[j];
        }
        
        // Calculate the average of the subarray
        const average = sum / k;
        
        // If the average is greater than or equal to the threshold, increment the count
        if (average >= threshold) {
            count++;
        }
    }
    
    return count;
};
// Complexity O(N)^2