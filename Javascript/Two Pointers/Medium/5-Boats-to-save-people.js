/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    let a = 0;
    let b = people.length - 1;
    let boats = 0
    people = people.sort((a, b) => a - b)
    while (a <= b) {
        debugger
        if (people[a] + people[b] <= limit) {
            a++
        }
            b--
            boats++
    }
    return boats;
};
numRescueBoats([3,5,3,4],3)