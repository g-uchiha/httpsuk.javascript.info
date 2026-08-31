"use strict"

function makeGreeting(name) {
    return () => {
        return `Hello, ${name}!`
    }
}

const greetJohn = makeGreeting("John");
const greetRobb = makeGreeting("Robb");

console.log(greetJohn());
console.log(greetRobb());
console.log(greetJohn());
