"use strict"

function multiplyBy(a) {
    return function(b) {
        console.log(a * b);
    }
}

const double = multiplyBy(2);
double(5);
double(10);
double(20);

const triple = multiplyBy(3);
triple(5);
triple(10);
triple(20);
