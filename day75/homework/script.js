// 1
function sumDigits(n) {
    let result = 0;
    n = Math.abs(n);  // უარყოფითი რიცხვების შემთხვევაში, აბსოლუტური მნიშვნელობის აღება
    while (n > 0) {
        result += n % 10;
        n = Math.floor(n / 10);  // მნიშვნელობის განახლება
    }
    return result;
}

console.log(sumDigits(123));  // 6 (1 + 2 + 3)
console.log(sumDigits(405));  // 9 (4 + 0 + 5)
console.log(sumDigits(-123)); // 6 (1 + 2 + 3) - უარყოფითი რიცხვის მაგალითი

// 2
function sumTwoLargest(lst) {
    if (lst.length < 2) {
        return null;
    }

    let max1 = Math.max(...lst);  // პირველი მაქსიმუმი
    lst.splice(lst.indexOf(max1), 1);  // ამოიღეთ პირველი მაქსიმუმი სიიდან
    let max2 = Math.max(...lst);  // მეორე მაქსიმუმი

    return max1 + max2;
}

console.log(sumTwoLargest([3, 7, 2, 9, 5]));  // 16 (9 + 7)
console.log(sumTwoLargest([10, 10, 5, 3]));   // 20 (10 + 10)
