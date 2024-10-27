function printElement(element) {
    if (element) {
        console.log(element);
    } else {
        console.log("Item does not exist.");
    }
}

const myElement = document.getElementById('myElementId'); 
printElement(myElement);
