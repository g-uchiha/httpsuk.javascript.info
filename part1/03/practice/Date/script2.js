"use strict"

const date1 = new Date(2001, 0, 18);
const date2 = new Date(2001, 8, 23);
const date3 = new Date(2001, 6, 11);

function isBirthday(date) {
    const now = new Date();

    const nowMonth = now.getMonth();
    const nowDate  = now.getDate();
    const birthMonth = date.getMonth();
    const birthDay    = date.getDate();

    if(
        nowMonth < birthMonth || (
            nowMonth === birthMonth &&
            nowDate < birthDay
        )
    ) return "will";

    if(
        nowMonth > birthMonth || (
            nowMonth === birthMonth &&
            nowDate > birthDay
        )
    ) return "passed";

    return "now";
}

console.log(isBirthday(date1));
console.log(isBirthday(date2));
console.log(isBirthday(date3));
