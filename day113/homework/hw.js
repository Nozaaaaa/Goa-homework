// task 1:

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    setName(new1) {
        this.name = new1;
    }

    getAge() {
        return this.age;
    }

    setAge(new2) {
        this.age = new2;
    }
}

// task 2:

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getTitle() {
        return this.title;
    }

    setTitle(new1) {
        this.title = new1;
    }

    getAuthor() {
        return this.author;
    }

    setAuthor(new2) {
        this.author = new2;
    }

    getPages() {
        return this.pages;
    }

    setPages(new3) {
        this.pages = new3;
    }
}

// task 3:

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getFullName() {
        return this.brand + ' ' + this.model;
    }

    setYear(new1) {
        this.year = new1;
    }
}

// task 4:

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }

    setWidth(new1) {
        this.width = new1;
    }

    setHeight(new2) {
        this.height = new2;
    }
}

// task 5:

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    getUsername() {
        return this.username;
    }

    setUsername(new1) {
        this.username = new1;
    }

    getEmail() {
        return this.email;
    }

    setEmail(new2) {
        this.email = new2;
    }

    setPassword(new3) {
        this.password = new3;
    }
}