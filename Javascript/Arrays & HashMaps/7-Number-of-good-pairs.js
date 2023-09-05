/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let hashMap = {};
    let counter = 0
    for (let i = 0; i < nums.length; i++) {
        debugger
        if (hashMap.hasOwnProperty(nums[i])) {
            counter += hashMap[nums[i]]
            hashMap[nums[i]] = (hashMap[nums[i]] + 1)
        }
        else {
            hashMap[nums[i]] = (hashMap[nums[i]] + 1 || 1 )
        }
    }
    return counter;
};

// Complexity Analysis

/*
The given code is used to find the number of identical pairs in an array of numbers. It uses a hash map to keep track of the count of each number in the array.
Let's analyze the complexity of this code:

1. **Initialization**:
   - `let hashMap = {};` initializes an empty object/hash map.
   - `let counter = 0;` initializes a counter to zero.
   - These operations are constant time, so they can be considered O(1).

2. **For Loop**:
   - The code uses a `for` loop to iterate through the `nums` array.
   - The loop runs from `i = 0` to `i < nums.length`, so it executes exactly `nums.length` times.

3. **Inside the Loop**:
   - The key operation inside the loop is checking and updating the hash map.
     - `if (hashMap.hasOwnProperty(nums[i])) { ... }` checks if the hash map already has an entry for the current number `nums[i]`.
     - If it does, it adds the current count to the `counter` and increments the count in the hash map.
     - If it doesn't, it initializes the count in the hash map to 1.
   - Each of these operations involves hash map lookups, which are typically O(1) on average.

4. **Return Statement**:
   - Finally, the function returns the `counter`, which represents the number of identical pairs in the array.

Overall, the time complexity of this code is O(n), where n is the length of the `nums` array.
This is because the loop iterates through the array once, and all other operations inside the loop are constant time or O(1).
 The space complexity is also O(n) because in the worst case, the hash map can contain n unique elements (one for each element in the array).

 */