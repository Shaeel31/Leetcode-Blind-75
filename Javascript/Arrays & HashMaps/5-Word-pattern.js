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

