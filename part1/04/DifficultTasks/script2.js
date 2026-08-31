"use strict"

function createUser(name) {
    let userName = name;

    this.getName = function () {
        return userName;
    };

    this.rename = function (name) {
        userName = name;
    };
}