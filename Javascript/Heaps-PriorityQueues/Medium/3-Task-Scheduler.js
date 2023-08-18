function leastInterval(tasks, n) {
    const charMap = new Array(26).fill(0);
    for (const task of tasks) {
        charMap[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    charMap.sort((a, b) => b - a);
    const maxVal = charMap[0] - 1;
    let idleSlots = maxVal * n;

    for (let i = 1; i < charMap.length; i++) {
        debugger
        idleSlots -= Math.min(charMap[i], maxVal);
    }

    return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
}
//Time Complexity O(N * 26)