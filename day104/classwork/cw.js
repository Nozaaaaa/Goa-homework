// 1
function solve(a,b){
  let res = '';
  for(let i = 0; i<a.length; i++) {
    if (!b.includes(a[i])) {
      res += a[i];
    };
  };
  for (let j = 0; j<b.length; j++) {
    if (!a.includes(b[j])) {
      res += b[j];
    };
  };
  return res;
};

// 2
function swapValues(arr) {
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
}