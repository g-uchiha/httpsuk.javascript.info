function getMostFrequentChars(str) {
    const symbols = {};

    let char = "";
    let count = 0;

    for(const char of str) {
        if(symbols[char] === undefined) symbols[char] = 1;
        else symbols[char]++;
    }

    for(const item in symbols) {
        if(symbols[item] === count) char += item;

        if(symbols[item] > count) {
            count = symbols[item];
            char = item;
        }
    }

    return char;
}

console.log(getMostFrequentChars("bbbbananarrrrgggg"));