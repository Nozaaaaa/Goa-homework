// Homework 1:

let arr = [123, 545, 'Hello, World!', 3.1415926535, 'GOA', true, false];
console.log(arr.map(item => typeof item !== 'string'));

// Homework 2:

// let arr = [100, 32, 72, 80, 98, 100, 70, 0, 99, 22, 54, 28];
console.log(arr.filter(score => score >= 70));

// Homework 4:

let res = arr.reduce((acc, num) => {
    acc.sum += num;
    acc.count++;
    return acc;
}, {sum: 0, count: 0})

let avg = res.sum / res.count
console.log(avg)

// Homework 5:

