/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
    let queue = new MaxPriorityQueue();
    // nums =  nums.map((x)=> BigInt(x))
    for (let i = 0; i < nums.length; i++) {
        queue.enqueue(nums[i]);
    }
    let el = 0;
    while (k !== 0) {
        el = queue.dequeue().element;
        k--
    }
    return el;
};