var getOrder = function(tasks) {
    // This function takes an array of tasks as input and returns an array of task indices in the order they are processed.
    
    for(let i = 0; i < tasks.length; i++) tasks[i].push(i);
    // This loop iterates through each task in the 'tasks' array and adds the index of the task at the end of its sub-array.
    
    tasks.sort((a, b) => a[0] - b[0]);
    // This line sorts the 'tasks' array based on the first element of each sub-array (which represents the task's enqueue time).
    
    const pq = new MinPriorityQueue({
        compare: (e1, e2) => {
            if(e1[1] === e2[1]) return e1[2] - e2[2];
            return e1[1] - e2[1];
        }
    });
    // This creates a min priority queue ('pq') using a library (not shown in the code) and defines a custom comparison function.
    // The comparison function first checks if the enqueue times (e1[1] and e2[1]) are equal; if so, it compares task indices (e1[2] and e2[2]).
    // If the enqueue times are not equal, it compares them directly.

    const a = [];
    // This initializes an empty array 'a' that will store the order in which tasks are processed.
    
    let t = tasks[0][0], i = 0;
    // This initializes variables 't' to the enqueue time of the first task and 'i' to 0 (used to iterate through tasks).
    
    while(pq.size() || i < tasks.length){
        // This loop runs as long as either the priority queue 'pq' is not empty or there are tasks left to be processed.
        
        while(i < tasks.length && t >= tasks[i][0]){
            pq.enqueue(tasks[i]);
            i++;
        }
        // This nested loop enqueues tasks into the priority queue 'pq' if their enqueue time is less than or equal to 't'.
        // It iterates through the remaining tasks and enqueues them until the enqueue time is greater than 't'.

        if(pq.size()){
            let e = pq.dequeue();
            a.push(e[2]);
            t += e[1];
        }
        // If the priority queue 'pq' is not empty, it dequeues the task with the smallest enqueue time and pushes its index 'e[2]' to array 'a'.
        // It also updates 't' by adding the processing time of the dequeued task 'e[1]'.
        
        else t = tasks[i][0];
        // If the priority queue is empty, it means there are no tasks ready to be processed at the moment.
        // So, 't' is updated to the enqueue time of the next task in the 'tasks' array.
    }
    return a;
    // Finally, the function returns the array 'a' which contains the indices of tasks in the order they were processed.
};

// Library used for MinPriorityQueue
// https://github.com/datastructures-js/priority-queue

