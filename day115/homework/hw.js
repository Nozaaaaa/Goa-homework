// task 1:

class Temperature {
    constructor(celsius, farenheit) {
        this.farenheit = farenheit;
        this.celsius = celsius;
    }

    set celsius(faren) {
        this._celsius = (faren - 32) * (9 / 5);
    }

    set farenheit(cel) {
        this._farenheit = cel * (9 / 5) + 32;
    }

    get farenheit() {
        return this._farenheit;
    }
}

// task 2

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(width) {
        this._width = width;
    }

    set height(height) {
        this._height = height;
    }

    get area() {
        return this._height * this._width;
    }
}

// task 3:

class User {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    set firstName(first) {
        this._first = first;
    }

    set lastName(last) {
        this._last = last;
    }

    get fullName() {
        return this._first + ' ' + this._last;
    }
}

// task 4:

class BankAccount {
    #balance;
    constructor(initB = 0) {
        this.#balance = initB > 0 ? initB : 0;
    }

    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        if (amount > 0) {
            this.#balance = amount;
        }
    }
}

// task 5:

class Product {
    constructor(price = 0, discount = 0) {
        this.price = price;
        this.discount = discount;
    }

    set price(value) {
        this._price = value > 0 ? value : 0;
    }

    get price() {
        this._price = this.price;
    }

    set discount(value) {
        this._discount = value >= 0 ? value : 0;
    }

    get discount() {
        this._discount = discount;
    }

    get finalPrice() {
        this._price - this._discount;
    }
}