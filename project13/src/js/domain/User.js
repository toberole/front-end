class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sysName() {
        return this.name
    }

    toString() {
        return "name: " + this.name + ",age: " + this.age;
    }
}

function getUser(name, age) {
    return new User(name, age);
}

export default {
    User, getUser
}