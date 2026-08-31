import {folder} from "./state.js";

function countFiles(root) {
    let count = 0;

    if(root.files) count += root.files.length;

    if(root.folders) {
        for(const folder of root.folders) {
            count += countFiles(folder);
        }
    }

    return count;
}

function getFiles(root) {
    const arr = [];

    if(root.files) {
        for(const file of root.files) {
            arr.push(file);
        }
    }

    if(root.folders) {
        for(const folder of root.folders) {
            arr.push(...getFiles(folder));
        }
    }

    return arr;
}

console.log(countFiles(folder));
console.log(getFiles(folder));
