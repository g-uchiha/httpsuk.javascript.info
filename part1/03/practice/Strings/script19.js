"use strict"

function isImage(filename) {
    const extensions = {
        0: ".jpg",
        1: ".png",
        2: ".gif",
        3: ".webp",
    };

    for(const key in extensions) {
        if(filename.endsWith(extensions[key])) return true;
    }

    return false;
}