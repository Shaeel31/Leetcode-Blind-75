/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    let dict = {}
    let allWinners = new Set()
    let peopleWithOneloose = []
    for (let i = 0; i < matches.length; i++) {
        let [winner, loser] = matches[i];
        allWinners.add(winner)
        dict[loser] = (dict[loser] || 0) + 1
        if (allWinners.has(loser)) {
            allWinners.delete(loser)
        }
        if (dict.hasOwnProperty(winner) && allWinners.has(winner)) {
            allWinners.delete(winner)
        }

    }
    let players = Object.keys(dict)
    for (let j = 0; j < players.length; j++) {
        if (dict[players[j]] == 1) {
            peopleWithOneloose.push(Number(players[j]))
        }
    }
    return [Array.from(allWinners).sort((x, y) => x - y), peopleWithOneloose]
};

findWinners([[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]])