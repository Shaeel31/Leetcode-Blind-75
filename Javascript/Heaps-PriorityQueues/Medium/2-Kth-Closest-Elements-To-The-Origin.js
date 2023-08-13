// As in Javascript there are no built in Min Heaps so we make a Min Heap Class



class MinHeap {
    constructor() {
        this.heap = [];
    }

    enqueue(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    dequeue() {
        if (this.heap.length === 0) return null;

        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        return root;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[parentIndex][0] > this.heap[currentIndex][0]) {
                [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let smallestIndex = currentIndex;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex][0] < this.heap[smallestIndex][0]) {
                smallestIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][0] < this.heap[smallestIndex][0]) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex !== currentIndex) {
                [this.heap[currentIndex], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[currentIndex]];
                currentIndex = smallestIndex;
            } else {
                break;
            }
        }
    }
}

// The function implements the K Closest elements to the origin problem 
var kClosest = function (points, k) {
    // we define a min heap and take the distances between elements as the
    // coordinates with the smallest disatances will be closest 
    // to the origin 
    let heap = new MinHeap();
    let coordinates = [];
    for (const [x, y] of points) {
        let distances = x ** 2 + y ** 2;
        coordinates.push([distances, x, y]);
    }

    // All the coordinates along with there distances are added to the HEAP.The reason to add the distance 
    // along with the coordinates is that the Min Heap will order them according to its property from smallest
    // to greater
    coordinates.forEach(x => heap.enqueue(x));

    // We than start poping from the HEAP as the smallest distance elements would be at the top and pop unitil k = 0
    let res = [];
    while (k > 0) {
        res.push(heap.dequeue().slice(1));
        k--;
    }
    console.log( res);
};

kClosest([[1,3],[-2,2]], 1)


// Important Notes : 

