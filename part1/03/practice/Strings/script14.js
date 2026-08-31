"use strict"

function domainAnalyzer(url) {
    const start = url.indexOf("/") + 2;
    const end   = url.indexOf("/", start);

    return end !== -1 ? url.slice(start, end) : url.slice(start);
}

console.log(domainAnalyzer("https://github.com/abrakadabra"));