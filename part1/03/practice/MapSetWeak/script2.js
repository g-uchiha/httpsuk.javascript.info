"use strict"

const playersServer = new Set();

function joinServer(server, nickname) {
    if(isOnline(server, nickname)) return false;

    server.add(nickname);
    return true;
}

function leaveServer(server, nickname) {
    if(!isOnline(server, nickname)) return false;

    server.delete(nickname);
    return true;
}

function onlineCount(server) {
    return server.size;
}

function isOnline(server, nickname) {
    return server.has(nickname);
}

console.log(joinServer(playersServer, "Alex"));
console.log(joinServer(playersServer, "Kate"));
console.log(joinServer(playersServer, "Alex"));

console.log(isOnline(playersServer, "Kate"));
console.log(isOnline(playersServer, "John"));

console.log(onlineCount(playersServer));

console.log(leaveServer(playersServer, "Alex"));
console.log(leaveServer(playersServer, "Alex"));

console.log(onlineCount(playersServer));