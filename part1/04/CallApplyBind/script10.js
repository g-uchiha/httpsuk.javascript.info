"use strict"

function cachingDecorator(func) {
    function wrapper(...args) {
        wrapper.calls++;
        const stringifiedArgs = JSON.stringify(args);

        if(wrapper.cache.has(stringifiedArgs)) {
            return wrapper.cache.get(stringifiedArgs);
        }

        const result = func.apply(this, args);
        wrapper.cache.set(stringifiedArgs, result);

        return result;
    }

    wrapper.calls = 0;
    wrapper.cache = new Map();
    return wrapper;
}