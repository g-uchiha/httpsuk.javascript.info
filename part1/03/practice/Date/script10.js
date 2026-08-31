"use strict"

const store = {
    userLogs: {
        users: [
            {
                name: "Josef",
                userLogins: [
                    {start: new Date(), end: new Date()},
                    {start: new Date(), end: new Date()},
                    {start: new Date(), end: new Date()},
                ],
            },

            {
                name: "Alex",
                userLogins: [
                    {start: new Date(), end: new Date()},
                    {start: new Date(), end: new Date()},
                    {start: new Date(), end: new Date()},
                ],
            },

            {
                name: "Christofer",
                userLogins: [
                    {start: new Date(), end: new Date()},
                    {start: new Date(), end: new Date()},
                    {start: new Date(), end: new Date()},
                ],
            },
        ],
    }
};

const josef = getUserLogs("Josef");



function getUserLogs(name) {
    return store.userLogs.users.find(user => user.name === name);
}