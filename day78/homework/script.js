function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

function nearestLeapYear(year) {
    let nextYear = year + 1;
    let prevYear = year - 1;
    
    while (!isLeapYear(nextYear)) {
        nextYear++;
    }

    while (!isLeapYear(prevYear)) {
        prevYear--;
    }

    return (year - prevYear <= nextYear - year) ? prevYear : nextYear;
}

function sumOfDigits(number) {
    let sum = 0;
    let numStr = number.toString();
    for (let char of numStr) {
        sum += parseInt(char);
    }
    return sum;
}

// ტესტირება
let years = [2100, 2104, 2400];

years.forEach(year => {
    if (isLeapYear(year)) {
        console.log(`${year} - Yes`);
    } else {
        console.log(`${year} - No, nearest leap year: ${nearestLeapYear(year)}`);
    }
});

// სამნიშნა რიცხვის ციფრთა ჯამის გამოთვლა
let number = 385; 
console.log(`Sum of digits of ${number}: ${sumOfDigits(number)}`);
