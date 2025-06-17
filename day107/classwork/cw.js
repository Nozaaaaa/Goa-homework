// 1
const arr = ["Goa", "novatori", "step", "step"];
const result = arr.map(item => item[0] === item[0].toUpperCase() ? "Good" : "Bad");
console.log("Map result:", result); // ["Good", "Bad", "Bad", "Bad"]

// 2
const numbers = [11, 3, 1, 5, 6, 2, 0, 13];
const filtered = numbers.filter(num => num > 5);
console.log("Filter result:", filtered); // [11, 6, 13]

// 3
const strings = ["GOA", " is", " the", " best"];
const concatenated = strings.reduce((acc, curr) => acc + curr);
console.log("Reduce result:", concatenated); // "GOA is the best"
