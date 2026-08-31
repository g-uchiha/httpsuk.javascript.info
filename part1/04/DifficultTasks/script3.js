"use strict"

function createFilter(fn) {
    const statistic = {
        calls: 0,
        results: [],
    };

    function wrapper(arg) {
        const result = fn(arg);
        statistic.calls++;
        statistic.results.push({arg, result});

        return result;
    }

    wrapper.getStatistic = function() {
        return statistic;
    };

    return wrapper;
}

//-------------------------------------------

const greaterThan = createFilter(x => x > 10);
const even = createFilter(x => x % 2 === 0);

const arr = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 26, 37, 18, 29, 90],
    [1, 2, 3, 4, 5, 26, 37, 18, 29, 90],
    [1, 2, 3, 4, 5, 26, 37, 18, 29, 90],
];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].filter(greaterThan));
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].filter(even));
}

//-------------------------------------------

console.log(greaterThan.getStatistic());
console.log(even.getStatistic());
