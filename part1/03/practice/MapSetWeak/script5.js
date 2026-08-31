"use strict"

const clientsDB = new Map();

function Client(id, name, email, balance) {
    this.id      = id;
    this.name    = name;
    this.email   = email;
    this.balance = balance;
}

function createClient(id, name, email, balance) {
    return new Client(id, name, email, balance);
}

function generateId() {
    return Math.round(Math.random() * 10000 + 1);
}

const client1 = createClient(generateId(), "Alex", "@gmail.com", 0);
const client2 = createClient(generateId(), "Kate", "@gmail.com", 0);
const client3 = createClient(generateId(), "John", "@gmail.com", 0);

function addClient(db, client) {
    if(isClient(db, client)) return `Client "${client.name}" already exists`;
    db.set(client.id, client);
    return `"${client.name}" successfully signed up`;
}

function getClient(db, id) {
    return db.get(id);
}

function updateBalance(db, id, balance) {
    db.get(id).balance = balance;
    return `Balance was changed: ${db.get(id).balance}`;
}

function deleteClient(db, id) {
    const name = db.get(id).name;
    db.delete(id);
    return `"${name}" successfully removed`;
}

function showAllClients(db) {
    return new Map(db);
}

function isClient(db, client) {
    return db.has(client.id);
}

addClient(clientsDB, client1);
addClient(clientsDB, client2);
addClient(clientsDB, client3);

console.log(showAllClients(clientsDB));
