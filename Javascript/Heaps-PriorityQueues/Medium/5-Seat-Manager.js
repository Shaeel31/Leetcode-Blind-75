// initally O(n) followed by O(log n)
var SeatManager = function(n) {
    this.arr = [];
    for (let i = 1; i <= n; i++) this.arr.push(i);
};
SeatManager.prototype.bin = function(val) {
    let l = 0;
    let h = this.arr.length;
    while (l < h) {
        let m = (l + h) >> 1;
        if (this.arr[m] < val) {
            l = m + 1
        } else {
            h = m;
        }
    }
    return l;
};
SeatManager.prototype.reserve = function() {
    return this.arr.shift();
};
SeatManager.prototype.unreserve = function(seatNumber) {
    this.arr.splice(this.bin(seatNumber), 0, seatNumber);
};