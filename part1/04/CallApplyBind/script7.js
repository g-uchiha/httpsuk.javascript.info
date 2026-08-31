"use strict"

function printArguments() {
    return [].join.call(arguments, ",");
}

console.log(printArguments(10, 20, 30, 40));