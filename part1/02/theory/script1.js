const user1 = new Object();
const user2 = {};

const user3 = {
    name: "Viktor",
    age: 25,
    isAdmin: true,
    "likes cats": true,

    hello: () => {
        console.log("hello world");
    },

    fruits: ["apple", "banana"],
};

delete user3.age;

// console.log(JSON.parse(JSON.stringify(user3)));
user3.age = 26;
// console.log(JSON.parse(JSON.stringify(user3)));

// console.log(user3["likes cats"]);
// console.log("age" in user3);
// console.log("ogr" in user3);

const user4 = {};

console.log(user3);

for(const key in user3){
    user4[key] = user3[key];
}

user4.name = "Sasha";
console.log(user4);

user4.hello();
console.log(user3);

console.log(user3.fruits);
console.log(user4.fruits);

user4.fruits.push("grape");

console.log(user3.fruits);
console.log(user4.fruits);
