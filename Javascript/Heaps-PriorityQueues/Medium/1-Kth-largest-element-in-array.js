/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let queue = new MaxPriorityQueue()
    let element;
    for(let el of nums)  queue.enqueue(el);
    while(k !== 0){
         element = queue.dequeue().element;
         k--
    }
    return element;
};


// Complexity of a binary search is O(logn)
