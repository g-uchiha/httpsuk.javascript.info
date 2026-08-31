"use strict"

const space = [
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],

    [
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18],
    ],

    [
        [19, 20, 21],
        [22, 23, 24],
        [25, 26, 27],
    ]
];

function sumOfSpace(space) {
    return space.reduce((a, b) => {
        return a + b.reduce((c, d) => {
            return c + d.reduce((e, f) => e + f, 0);
        }, 0);
    }, 0);
}

function searchValue(space, val) {
    for(let i = 0; i < space.length; i++) {
        for(let j = 0; j < space[i].length; j++) {
            for(let k = 0; k < space[i][j].length; k++) {
                if(space[i][j][k] === val) return `Coordinates of ${val}: space[${i}][${j}][${k}]`;
            }
        }
    }

    return `${val} does not exist in space`;
}

function countSpaceItems(space) {
    let count = 0;

    for(let i = 0; i < space.length; i++) {
        for(let j = 0; j < space[i].length; j++) {
            for(let k = 0; k < space[i][j].length; k++) {
                count++;
            }
        }
    }

    return count;
}

console.log(sumOfSpace(space));
console.log(searchValue(space, 23));
console.log(searchValue(space, 49));
console.log(countSpaceItems(space));