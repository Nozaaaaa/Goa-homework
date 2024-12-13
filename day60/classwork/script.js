let counterValue = 0;

const counterElement = document("counter");

function update() {
    counterElement.textContent = counterValue;
    
    if (counterValue < 0) {
        counterElement.classList.add("red");
        counterElement.classList.remove("green");
    } else if (counterValue > 0) {
        counterElement.classList.add("green");
        counterElement.classList.remove("red");
    } else {
        counterElement.classList.remove("red", "green");
    }
}

function increment() {
    counterValue++;
    update();
}

function decrement() {
    counterValue--;
    update();
}

function reset() {
    counterValue = 0;
    update();
}

update();

