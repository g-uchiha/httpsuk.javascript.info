const passport = {
    firstName: 'Viktor',
    lastName: 'Dzhulai',
    age: 25,
};

function passportInfo(passport) {
    if(typeof passport !== "object" || passport === null) {
        return "Error: need an object";
    }

    if(passport.firstName === undefined) return `Error: property ${passport.firstName} is not exist...`;
    if(passport.lastName === undefined)  return `Error: property ${passport.lastName} is not exist...`;
    if(passport.age === undefined)       return `Error: property ${passport.age} is not exist...`;

    return `${passport.firstName} ${passport.lastName}, ${passport.age}`;
}

console.log(passportInfo(passport));
console.log(passportInfo({}));
console.log(passportInfo(null));
console.log(passportInfo("text"));
console.log(passportInfo(5));
