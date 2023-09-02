// Define a function to calculate the minimum number of boats needed to rescue people.
var numRescueBoats = function(people, limit) {
    // Step 1: Sort the 'people' array in ascending order based on their weights.
    people.sort((a, b) => a - b);
    
    // Initialize variables
    let boats = 0;    // To count the number of boats needed
    let left = 0;     // Pointer for the lightest person
    let right = people.length - 1; // Pointer for the heaviest person

    // Step 2: Loop through the 'people' array to pair individuals and calculate boats needed.
    while (left <= right) {
        // Check if the sum of weights of 'left' and 'right' persons is within the 'limit'.
        if (people[left] + people[right] <= limit) {
            left++; // Move to the next lightest person.
        }
        right--;   // Move to the next heaviest person.
        boats++;   // Increment the boat count for each pairing.
    }

    // Step 3: Return the total number of boats needed for the rescue operation.
    return boats;
};

// COMPLEXITY ANALYSIS

/* 
The time complexity of the above code is O(n log n), where 'n' is the number of people in the `people` array. This complexity arises mainly from the sorting step.

Here's a breakdown of the complexity:

1. Sorting: The `people` array is sorted in ascending order based on their weights using the `sort` method,
 which has a time complexity of O(n log n) for typical sorting algorithms. This is the dominant factor in the overall time complexity.
2. Loop: The `while` loop iterates through the sorted `people` array once, comparing and updating pointers and counting boats. This loop's time complexity is O(n).
Asymptotically, O(n log n) dominates the time complexity, so the overall time complexity of the code is O(n log n).

The space complexity of the code is O(1) because it uses a constant amount of additional memory for variables like `boats`,
 `left`, and `right`, regardless of the input size. The sorting operation is performed 
 in-place on the original array, so it doesn't incur any significant additional space complexity.

 */