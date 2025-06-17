// homework 1:

let div1 = document.querySelector('div');

div1.onmouseenter = () => {
  div1.moveInterval = setInterval(() => {
    if (div1.style.left === '1000px') {
      div1.style.left = '0px';
    } else {
      div1.style.left = '1000px';
    }
  }, 300);
};

div1.onmouseleave = () => clearInterval(div1.moveInterval);

// homework 2:

let box = document.querySelector('div')

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function getRandomRadius() {
    return `${Math.floor(Math.random() * 51)}px`;
}

setInterval(() => {
    box.style.backgroundColor = getRandomColor();
    box.style.borderRadius = getRandomRadius();
}, 1000);

