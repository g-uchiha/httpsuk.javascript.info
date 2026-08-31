"use strict"

const dialog = [
    // {userName: "Kate", txt: "", date: new Date("2024-05-23T23:10:54")},
];

function Message(userName, txt) {
    this.userName = userName;
    this.txt = txt;
    this.date = new Date();
}

const user1 = {
    name: "John",

    sendMessage(msg = "") {
        if(msg === "") return;
        const message = new Message(this.name, msg);
        dialog.push(message);

        return message;
    },

    viewMessagesPerDay(day, month, year) {
        return dialog.filter(msg => {
            return (
                msg.date.getDate()     === day   &&
                msg.date.getMonth()    === month &&
                msg.date.getFullYear() === year
            );
        });
    },

    viewMessagesPerMonth(month, year) {
        return dialog.filter(msg => {
            return (
                msg.date.getMonth()    === month &&
                msg.date.getFullYear() === year
            );
        });
    },

    viewAllDialogINC() {
        const messages = [...dialog];
        return messages.sort((a, b) => a.date - b.date);
    },

    viewAllDialogDEC() {
        const messages = [...dialog];
        return messages.sort((a, b) => b.date - a.date);
    },
};
