// 1
function calculate(a, b) {
    const sum = a + b;           
    const difference = a - b;    
    const product = a * b;      

    return {
        sum: sum,
        difference: difference,
        product: product
    };
}

const result = calculate(5, 3);
console.log("Sum:", result.sum);           
console.log("Difference:", result.difference); 
console.log("Product:", result.product);  

// 2
function getFirstCharacter(str) {
    if (str.length === 0) {
        return null; 
    }
    return str.charAt(0); 


const firstChar = getFirstCharacter("Hello");
console.log("first letter:", firstChar); 
}

// 3
function squareNumber(num) {
    return num * num; // რიცხვის კვადრატი
}

// გამოსაყენებლად:
const result1 = squareNumber(4);
console.log("კვადრატი:", result); // კვადრატი: 16

// 4
function changeColorToRed(element) {
    element.style.color = "red"; 
}

const myElement1 = document.getElementById("myElement"); 
changeColorToRed(myElement);

// 5
function changeText(element, newText) {
    element.textContent = newText; // ტექსტის ცვლილება
}

// გამოსაყენებლად:
const myElement = document.getElementById("myElement"); 
changeText(myElement, "New text"); 

