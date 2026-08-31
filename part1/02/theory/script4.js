const user1 = {
    name: 'John',
    age: 35,
};

const user2 = {
    name: 'Ivan',
    age: 30,
};

user1.presentMySelf = presentMyself;
user2.presentMySelf = presentMyself;

user1.presentMySelf();
user2.presentMySelf();

function presentMyself() {
    alert(`Hello, I'm ${this.name}!`);
}

