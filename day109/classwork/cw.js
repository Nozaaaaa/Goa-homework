// kata 1:

function capitalize(s, arr) {
  let chars = s.split('');
  for (let i of arr) {
    if (i >= 0 && i < chars.length) {
      chars[i] = chars[i].toUpperCase();
    }
  }
  return chars.join('');
}

// kata 2:

function cubeOdd(arr) {
  let sum = 0;
  for (let i = 0; i<arr.length; i++){
    let cubed = (arr[i]**3);
    if (isNaN(cubed)) return undefined;
    if(cubed % 2 != 0 )sum += cubed;
  }
  return sum;
}