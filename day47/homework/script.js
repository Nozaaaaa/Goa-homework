// 1
function func(min){ return min * 60 }

// 2
function multiplySum(a, b, c) {
    return (a + b) * c;
}

const result = multiplySum(2, 3, 4); 
console.log(result);

// 3

function isFirstGreater(a, b) {
    return a > b;
}


console.log(isFirstGreater(5, 3)); // true
console.log(isFirstGreater(2, 4)); // false

// 4
function logElement(element) {
    console.log("Element: " + element);
}

logElement("Hello, world!"); 
logElement(42); 

// 5

function elementId(elementId, str) {
    const element = document.elementId(elementId);
    if (element) {
        element.textContent = str; 
    } else {
        console.log("Element not found");
    }
}

elementId("myElement", "Hello, world!");

