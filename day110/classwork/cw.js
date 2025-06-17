// kata 1:

function getIssuer(number) {
  number = number.toString() 
  if ((number.startsWith("34") || number.startsWith("37")) && number.length === 15) return "AMEX";
  if (number.startsWith("6011") && number.length === 16) return "Discover";
  if ((number.startsWith("51") || number.startsWith("52") || number.startsWith("53") || number.startsWith("54") || number.startsWith("55")) && number.length === 16) return "Mastercard";
  if (number.startsWith("4") && (number.length === 13 || number.length === 16)) return "VISA";
  return "Unknown";
}

// kata 2:

var palindromeChainLength = function(n) {
  let steps = 0;
  while (true) {
    let ne = Number(n.toString().split('').reverse().join(''));
    if (n === ne) return steps;
    n += ne;
    steps++;
  }
};