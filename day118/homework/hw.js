// task 1:

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal {
    bark() {
        return `Woof! მე ვარ ${this.name}`;
    }
}

const doggy1 = new Dog('კალმახი', 9);
console.log(doggy1.bark());

// task 2:

class Vehicle {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

class Car extends Vehicle {
    constructor(brand, model, year) {
        super(model, year);
        this.brand = brand;
    }

    getInfo() {
        return `ეს მანქანა არის ${this.brand} ${this.model} ${this.year}`;
    }
}

const car = new Car('Honda', 'Civic', 2006);
console.log(car.getInfo());

// task 3:

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, grade) {
        super(firstName, lastName);
        this.grade = grade;
    }

    getGrade() {
        return `${this.getFullName()} არის მე-${this.grade} კლასში`;
    }
}

const student1 = new Student('გიორგი', 'ხატიაშვილი', 11);
console.log(student1.getGrade());

// task 4:

class Shape {
    getArea() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super()
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height + 'cm^2';
    }
}

const rectangle1 = new Rectangle(15, 30);
console.log(rectangle1.getArea());

// task 5:

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    managerInfo() {
        return `მე ვარ ${this.name}, ვმუშაობ ${this.department}-ში და ჩემი ხელფასია $${this.salary}`;
    }
}

const manager1 = new Manager('ირაკლი', 11000, 'IT');
console.log(manager1.managerInfo());