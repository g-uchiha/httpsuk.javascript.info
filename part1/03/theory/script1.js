"use strict"

const object = {
    property: "value",
};

let var1 = object.property;
let var2 = var1;

console.log(var1);
console.log(var2);
console.log(object.property);

object.property = 123;

console.log(var1);
console.log(var2);
console.log(object.property);

function HelloWorld(str) {
    console.log(str);
}

HelloWorld("console.log");