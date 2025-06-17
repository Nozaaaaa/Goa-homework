// task 1:

class Person {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

new Person(200, 'Shio').introduce();

// task 2:

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            return "ნულზე გაყოფა არ შეიძლება";
        }
        return a / b;
    }
}

const calc = new Calculator();

console.log(calc.add(2, 5));
console.log(calc.subtract(10, 5));
console.log(calc.multiply(10, 5));
console.log(calc.divide(10, 0));

// task 3:

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        return this.books;
    }
}

const library = new Library();

library.addBook(new Book('Lorem', 'Ipsum'));
library.addBook(new Book('Sdsa', 'Shio'));
console.log(library.listBooks());


// task 4:

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return `${this.name} რაღაც ხმას გამოსცემს`;
    }
}

class Dog extends Animal {
    bark() {
        return `${this.name} ვაფ-ვაფს ამბობს`;
    }
}

const bobby = new Dog("ბობი");

console.log(bobby.makeSound());
console.log(bobby.bark());


// task 5:

class User {
    constructor(username) {
        this.username = username;
    }

    login() {
        console.log(`${this.username} has logged in`);
    }
}

class Admin extends User {
    deleteUser(user) {
        console.log(`${user.username} has been deleted`);
    }
}

const user = new User('shiola');
user.login();

const admin = new Admin();
admin.deleteUser(user);