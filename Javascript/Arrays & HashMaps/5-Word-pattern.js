function wordPattern(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }

    const patternMap = new Map();
    const wordMap = new Map();

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let ptrn = pattern[i]
        if (patternMap.has(word)) {
            if (patternMap.get(word) !== ptrn) {
                return false;
            }
        }
        else {
            patternMap.set(word, ptrn)
        }
        if (wordMap.has(ptrn)) {
            if (wordMap.get(ptrn) !== word) {
                return false;
            }
        }
        else {
            wordMap.set(ptrn,word)
        }
    }

    return true;
}

// Complexity Analysis

/* 

The complexity of the given code can be analyzed as follows:

Splitting the input string s into an array of words using s.split(' '): This operation takes O(n) time, where n is the length of the input string s.

Checking if the length of the pattern array is equal to the length of the words array: This is a constant-time operation and can be considered O(1).

Iterating over the pattern and words arrays in a loop: This loop runs for 'n' iterations, where 'n' is the length of the input string s. Therefore, the loop has a time complexity of O(n).

Inside the loop:

Accessing elements from both pattern and words arrays by index: This is a constant-time operation and can be considered O(1).

Checking and updating the patternMap and wordMap using Map operations (set, get, and has): These Map operations generally have an average time complexity of O(1).

Therefore, the overall time complexity of the given code is dominated by the loop, making it O(n) in terms of time complexity.

In terms of space complexity, the code uses two Map objects (patternMap and wordMap) to store mappings, and their space complexity is also O(n) since in the worst case, they can each store 'n' unique mappings.

So, the overall space complexity is O(n) as well.

*/