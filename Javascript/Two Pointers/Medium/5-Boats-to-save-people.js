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
