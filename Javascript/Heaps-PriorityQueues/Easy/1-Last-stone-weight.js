/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const queue = new MaxPriorityQueue();
       
       for (stone of stones) queue.enqueue(stone)
       
       while (queue.size() > 1) {
           let first = queue.dequeue().element;
           let second = queue.dequeue().element;
           if (first !== second) queue.enqueue(first-second)
       }
       
       return queue.size() === 0 ? 0 : queue.front().element   
   };
lastStoneWeight([2,7,4,1,8,1])

// Important Notes :  We make a max priority Queue and add all the stones in it 
// We get the 2 maximum stones and smash them if they are equal, both of them are destroyed
// If not than there difference is added to the priority queue.
// We keep the track of the elements present in the queue if there is only single element 
// present in  the queue or the queue is empty than we return the el or 0 in other case.
