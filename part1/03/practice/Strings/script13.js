"use strict"

function nameFormater(name = "") {
    return name === "" ? "" : name[0].toUpperCase() + name.slice(1).toLowerCase();
}

console.log(nameFormater("vIkToR"));