"use strict"

const store = {
    conversationRooms: [
        {
            roomNumber: 1,
            places: 4,
            reservations: [
                {start: new Date("2026-07-14T14:00"), end: new Date("2026-07-14T14:35"), name: "Robert"},
                {start: new Date("2026-08-14T10:30"), end: new Date("2026-07-14T16:40"), name: "Johnson"},
            ]
        },

        {
            roomNumber: 2,
            places: 7,
            reservations: [
                {start: new Date("2026-07-14T14:00"), end: new Date("2026-07-14T14:35"), name: "Alex"},
                {start: new Date("2026-08-14T10:30"), end: new Date("2026-07-14T16:40"), name: "John"},
                {start: new Date("2026-08-14T10:30"), end: new Date("2026-07-30T18:30"), name: "Kamilla"},
            ]
        },

        {
            roomNumber: 3,
            places: 7,
            reservations: [
                {start: new Date("2026-07-14T14:00"), end: new Date("2026-07-14T14:35"), name: "Simon"},
            ]
        },
    ],
};

function Reservation(start, end, name) {
    this.name = name;
    this.start = start;
    this.end = end;
}

function reserveRoom(roomNumber, targetTime, name) {
    const targetRoom = getAvailableRoom(roomNumber, targetTime);

    if(targetRoom === undefined) {
        return `Cannot reserve room for your time`;
    }

    const {start, end} = targetTime;
    const newReservation = new Reservation(start, end, name);
    targetRoom.reservations.push(newReservation);

    return `Room ${roomNumber} was reserved since ${start} to ${end} for name: ${name}`;
}

function getAvailableRoom(roomNumber, targetTime) {
    const theRoom = findRoom(roomNumber);

    if(theRoom === undefined) {
        console.log(`Room "${roomNumber}" doesn't exist...`);
        return;
    }

    const {start, end} = targetTime;

    for(const reservation of theRoom.reservations) {
        if(start <= reservation.end && end >= reservation.start) {
            console.log("Ваш бажаний час перетинається із уже запланованим");
            return;
        }
    }

    return theRoom;
}

function findRoom(roomNumber) {
    return store.conversationRooms.find(room => room.roomNumber === roomNumber);
}