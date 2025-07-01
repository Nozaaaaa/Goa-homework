function encode(string) {
  let res = '';
  for(let i = 0; i<string.length; i++) {
    if (string[i] === 'a') res += '1';
    else if (string[i] === 'e') res += '2';
    else if (string[i] === 'i') res += '3';
    else if (string[i] === 'o') res += '4';
    else if (string[i] === 'u') res += '5';
    else res += string[i]
  }
  return res
}

function decode(string) {
  let res1 = '';
  for(let i = 0; i < string.length; i++) {
    if (string[i] === '1') res1 += 'a';
    else if (string[i] === '2') res1 += 'e';
    else if (string[i] === '3') res1 += 'i';
    else if (string[i] === '4') res1 += 'o';
    else if (string[i] === '5') res1 += 'u';
    else res1 += string[i];
  }
  return res1;
}