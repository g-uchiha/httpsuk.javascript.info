const id = Symbol("id");

const person = {
    [id]: 0,
    name: "Viktor",
    age: 25,
};

for(const key in person) {
    console.log(key);
}

console.log(person[id]);