"use strict"

const store = {
    tasks: [
        {title: "", deadlineDate: new Date(), description: ""},
    ]
};

function Task(title, deadlineDate, description) {
    this.title = title;
    this.deadlineDate = deadlineDate;
    this.description = description;
}

const TaskManager = {
    getAllTasks: (store) => {
        return [...store.tasks];
    },

    getTasksForToday: (store) => {
        const now = new Date();
        const year  = now.getFullYear();
        const month = now.getMonth();
        const date  = now.getDate();

        return store.tasks.filter(task => {
            return task.deadlineDate.getFullYear() === year  &&
                   task.deadlineDate.getMonth()    === month &&
                   task.deadlineDate.getDate()     === date;
        });
    },

    getTasksForFuture: (store) => {
        const now = new Date();
        return store.tasks.filter(task => task.deadlineDate > now);
    },

    getOverdueTasks: (store) => {
        const now = new Date();
        return store.tasks.filter(task => task.deadlineDate < now);
    },

    addTask: (store, params) => {
        store.tasks.push(new Task(...params));
        sortState(store.tasks);
    },

    deleteTask: (store, title) => {
        const index = store.tasks.findIndex(task => task.title === title);
        if(index !== -1) store.tasks.splice(index, 1);
    },
};

function sortState(store) {
    store.sort((a, b) => a.deadlineDate - b.deadlineDate)
}