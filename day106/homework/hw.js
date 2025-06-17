// homework 1:

let names = ['aleqsandre', 'gio', 'irakli', 'lasha', 'zura'];

names.forEach(name => {
    if (name.length > 5) {
        console.log(name);
    }
});

// homework 2:

let nums = [1,2,3,4,5,6,7,8,9,10];
let evens = [];

nums.forEach(n => {
    if (n % 2 === 0) evens.push(n);
});

console.log(evens);

// homework 3:

let products = [
    { name: 'Apple', price: 5 },
    { name: 'Bread', price: 12 },
    { name: 'Milk', price: 15 },
    { name: 'Eggs', price: 8 }
];

for (let i in products) {
    if (products[i].price > 10) {
        console.log(products[i].name);
    }
}

// homework 4:

let sScores = {
    math: 45,
    physics: 78,
    chemistry: 50,
    biology: 30,
    history: 60
};

let fCout = 0;

for (let sub in sScores) {
    if (sScores[sub] < 51) {
        fCout++;
    }
}

console.log(fCout);