"use strict"

function History() {
    let history = [];

    this.add = function(action) {
        const newLog = {action, date: new Date()};
        history.push(newLog);
        return newLog;
    };

    this.last = function() {
        return history.length >= 1 ? history[history.length - 1] : "no data";
    };

    this.clear = function() {
        history = [];
        return `Your history is cleared`;
    }
}

const myHistory = new History();
myHistory.add("logged in");
myHistory.add("do something");
myHistory.add("logged out");
console.log(myHistory.last());
console.log(myHistory.clear());
console.log(myHistory.history);
