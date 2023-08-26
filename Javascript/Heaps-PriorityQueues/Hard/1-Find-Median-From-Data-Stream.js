// Define a MedianFinder constructor
var MedianFinder = function () {
    // Initialize two priority queues: one for smaller elements and one for larger elements
    this.min = new MaxPriorityQueue(); // MaxPriorityQueue for smaller elements
    this.max = new MinPriorityQueue(); // MinPriorityQueue for larger elements
};

/** 
 * Add a new number to the data structure.
 * @param {number} num - The number to be added.
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    // Always enqueue the new number into the min-queue
    this.min.enqueue(num);
    
    // Check if the balance condition between min-queue and max-queue is violated
    if ((this.min.size() && this.max.size()) && (this.min.front().element > this.max.front().element)) {
        // If violated, move an element from min-queue to max-queue to restore balance
        let el = this.min.dequeue().element;
        this.max.enqueue(el);
    }

    // Ensure that both queues have a similar or nearly similar size
    if (this.min.size() > this.max.size() + 1) {
        let el = this.min.dequeue().element
        this.max.enqueue(el);
    }
    if (this.max.size() > this.min.size()) {
        let el = this.max.dequeue().element
        this.min.enqueue(el);
    }
};

/**
 * Find and return the median of the current data.
 * @return {number} - The median value.
 */
MedianFinder.prototype.findMedian = function () {
    if (this.min.size() > this.max.size()) {
        // If min-queue is larger, median is the front element of min-queue
        return this.min.front().element;
    } else if (this.max.size() > this.min.size()) {
        // If max-queue is larger, median is the front element of max-queue
        return this.max.front().element;
    } else {
        // If both queues have the same size, median is the average of their front elements
        return (this.min.front().element + this.max.front().element) / 2;
    }
};

// Complexity Analysis 

/*
Adding a Number (addNum method):

Enqueuing into the priority queues (this.min and this.max) takes O(log N) time, where N is the number of elements in the queue.
Balancing the sizes of the queues involves potential dequeuing and re-enqueuing, which takes O(log N) time.
The code uses both the enqueue and dequeue operations at most a constant number of times per addition.
Overall, the time complexity for adding a number is O(log N), where N is the number of elements in the priority queues.
Finding Median (findMedian method):

Checking the sizes of the queues and returning the median takes constant time operations (comparisons and arithmetic).
The time complexity for finding the median is O(1).
Considering both operations, the overall time complexity for adding a number and finding the median in this code is O(log N), where N is the number of elements in the priority queues.

The space complexity of the code is O(N), where N is the number of elements stored in the priority queues. This is because the code maintains two priority queues to store the input numbers.
*/