"use strict"

const matrixNumbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const matrixLetters = [
    ["A", "B", "C"],
    ["D", "E", "F"],
];

//----------------------------------------------

function sumMatrix(matrix) {
    return matrix.reduce((a, b) => {
        return a + b.reduce((c, d) => c + d, 0);
    }, 0);
}

console.log(sumMatrix(matrixNumbers));

//----------------------------------------------

function findMax(matrix) {
    const newArray = [];

    for(const arr of matrix) {
        for(const item of arr) {
            newArray.push(item);
        }
    }

    return Math.max(...newArray);
}

console.log(findMax(matrixNumbers));

//----------------------------------------------

function findElem(matrix, elem) {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === elem) {
                return `Coordinate of ${elem}: arr[${i}][${j}];`;
            }
        }
    }

    return `Your element not found...`;
}

console.log(findElem(matrixNumbers, 9));
console.log(findElem(matrixNumbers, 5));
console.log(findElem(matrixNumbers, 0));

//----------------------------------------------

function sumOfEveryRow(matrix) {
    const newArray = [];

    for(const item of matrix) {
        newArray.push(item.reduce((a, b) => a + b, 0));
    }

    return newArray;
}

console.log(sumOfEveryRow(matrixNumbers));

//----------------------------------------------

function sumOfEveryColumn(matrix) {
    const newArray = [];

    for(let i = 0; i < matrix[0].length; i++) {
        let num = 0;

        for(let j = 0; j < matrix.length; j++) {
            num += matrix[j][i];
        }

        newArray.push(num);
    }

    return newArray;
}

console.log(sumOfEveryColumn(matrixNumbers));

//----------------------------------------------

function transportingMatrix(matrix) {
    const newArray = [];

    for(let i = 0; i < matrix[0].length; i++) {
        newArray.push([]);
    }

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            newArray[j][i] = matrix[i][j];
        }
    }

    return newArray;
}

console.log(transportingMatrix(matrixNumbers));
console.log(transportingMatrix(matrixLetters));

//----------------------------------------------

function mainDiagonalSum(matrix) {
    let sum = 0;

    for(let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
    }

    return sum;
}

console.log(mainDiagonalSum(matrixNumbers));

//----------------------------------------------

function isMatrixSquared(matrix) {
    if(matrix.length === 0) return false;

    for(let i = 0; i < matrix.length; i++) {
        if(matrix.length !== matrix[i].length) return false;
    }

    return true;
}

console.log(isMatrixSquared(matrixNumbers));
console.log(isMatrixSquared(matrixLetters));

//----------------------------------------------

function flatMatrix(matrix) {
    const flattedMatrix = [];

    for(const row of matrix) {
        for(const item of row) {
            flattedMatrix.push(item);
        }
    }

    return flattedMatrix;
}

console.log(flatMatrix(matrixNumbers));
console.log(flatMatrix(matrixLetters));

//----------------------------------------------

function findByCoordinates(matrix, x, y) {
    const errorMsg = "Wrong coordinates...";

    if(matrix[x]    === undefined) return errorMsg;
    if(matrix[x][y] === undefined) return errorMsg;

    return matrix[x][y];
}

console.log(findByCoordinates(matrixNumbers, 2, 2));
console.log(findByCoordinates(matrixLetters, 1, 1));
console.log(findByCoordinates(matrixLetters, 4, 6));
