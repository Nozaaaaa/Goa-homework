// 1
class Product {
  #price;
  
  constructor(price) {
    this.price = price; 
  }

  get price() {
    return this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw new Error("ფასი არ შეიძლება იყოს უარყოფითი!");
    }
    this.#price = value;
  }
}

// 2
class Rectangle {
  #width = 0;
  #height = 0;

  get area() {
    return this.#width * this.#height;
  }

  set dimensions({ width, height }) {
    if (width <= 0 || height <= 0) {
      throw new Error("ზომები უნდა იყოს დადებითი რიცხვები!");
    }
    this.#width = width;
    this.#height = height;
  }
}

// 3
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const parts = name.split(" ");
    if (parts.length !== 2) {
      throw new Error("სრული სახელი უნდა შეიცავდეს სახელს და გვარს!");
    }
    [this.firstName, this.lastName] = parts;
  }
}

// 4
class MathHelper {
  static sum(a, b) {
    return a + b;
  }
}

// 5
class Account {
  #balance;

  constructor(initialBalance) {
    this.balance = initialBalance; 
  }

  get balance() {
    return this.#balance;
  }

  set balance(value) {
    if (value < 0) {
      throw new Error("ბალანსი არ შეიძლება იყოს უარყოფითი!");
    }
    this.#balance = value;
  }
}
