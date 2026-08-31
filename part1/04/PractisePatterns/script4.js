"use strict"

// function memoize(fn) {
//     let cache = new WeakMap();
//
//     return function (...args) {
//         if(cache.has(args.sort())) return cache.get(args);
//
//         cache.set(args.sort(), fn(...args));
//         return cache.get(args);
//     }
// }

function memoize(fn) {
    const cache = {};

    return function(...args) {
        const strArgs = args.join(",");
        if(strArgs in cache) return cache[strArgs];
        cache[strArgs] = fn(...args);
        return cache[strArgs];
    }
}