// 1
console.log("=== unshift() ===");
let arr = [2, 3, 4];
arr.unshift(1); 
console.log(arr); // [1, 2, 3, 4]

// 2

console.log("\n=== shift() ===");
let arr2 = [1, 2, 3, 4];
let firstElement = arr2.shift();
console.log(arr2); // [2, 3, 4]
console.log("Shifted element:", firstElement); // 1

// 3

console.log("\n=== splice() ===");
let arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 2, 99);
console.log(arr3); // [1, 2, 99, 5]

// 4

console.log("\n=== slice() ===");
let arr4 = [10, 20, 30, 40, 50];
let newArr = arr4.slice(1, 4);
console.log(newArr); // [20, 30, 40]

// 5

console.log("\n=== concat() ===");
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let combined = arr5.concat(arr6);
console.log(combined); // [1, 2, 3, 4, 5, 6]

// 6

console.log("\n=== sort() ===");
let arr7 = [40, 100, 1, 5, 25, 10];
arr7.sort((a, b) => a - b); // ზრდადობით დალაგება
console.log(arr7); // [1, 5, 10, 25, 40, 100]

// 7

console.log("\n=== reverse() ===");
let arr8 = [1, 2, 3, 4, 5];
arr8.reverse();
console.log(arr8); // [5, 4, 3, 2, 1]

// 8

console.log("\n=== join() ===");
let arr9 = ["Hello", "World"];
let sentence = arr9.join(" ");
console.log(sentence); // "Hello World"
