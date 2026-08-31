function User(name, admin) {
    this.name  = name;
    this.admin = admin;

    this.sayHi = () => {
        console.log(`${this.name} has been successfully!`);
    };
}

const user1 = new User("Viktor", true);
console.log(user1);
user1.sayHi();

console.log(user1?.adress?.street);