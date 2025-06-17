// task 1:

// map:
function doubleMap(arr) {
    let res = [];
    for (let i = 0; i<arr.length; i++) {
        res.push(arr[i] * 2); 
    }
    return res;
}

//filter:

function evenFilter(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            res.push(arr[i]);
        }
    }
    return res;
}

// reduce:
function sumReduce(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// task 2:

// void ნიშნავს, რომ ფუნქცია არ აბრუნებს მნიშვნელობას, ხოლო return გამოიყენება ფუნქციის შედეგის დასაბრუნებლად.

// task 3:

const users = [
  { firstName: "Ana", lastName: "Kiknadze" },
  { firstName: "Giorgi", lastName: "Maisuradze" },
  { firstName: "Nino", lastName: "Kalandadze" }
];

let fullName = users.map(item => {
    return item.firstName + ' ' + item.lastName;
});

// task 4:

const students = [
  { name: "Nika", score: 85 },
  { name: "Lika", score: 92 },
  { name: "Saba", score: 88 },
  { name: "Tako", score: 95 }
];

let passed = students.map(student => {
    return {
        name: student.name,
        status: student.score > 90 ? 'Passed' : 'Failed'
    };
});

// task 5:

const cart = [
  { name: "Laptop", price: 1200, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
  { name: "Keyboard", price: 80, quantity: 1 }
];

let sum = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
}, 0);